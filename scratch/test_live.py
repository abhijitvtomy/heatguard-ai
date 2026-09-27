import asyncio
import json
import sys
import os

sys.path.insert(0, os.path.abspath("backend"))
from app.weather_service import weather_service

async def test():
    w = await weather_service.get_weather('LIVE')
    print('Base temp:', w['ambient_temp_c'], 'Solar:', w['solar_radiation_w_m2'])
    wards_geojson = json.load(open('backend/app/data/bengaluru_wards.json', encoding='utf-8'))
    # Pre-cache coordinates
    await weather_service.fetch_live_ward_coordinates(wards_geojson['features'])
    evaluated = weather_service.downscale_to_wards(w, wards_geojson)
    print('Evaluated count:', len(evaluated))
    for ward in evaluated[:8]:
        m = ward['microclimate']
        g = ward['ground_truth_verification']
        print(f"{ward['ward_id']} - {ward['name']}: {m['temperature_c']}°C (Observed: {g['observed_benchmark_temp_c']}°C, Diff: {g['variance_c']}°C, Acc: {g['accuracy_score_pct']}%)")
    ledger = weather_service.get_accuracy_verification_ledger(w, evaluated)
    print('Overall Accuracy:', ledger['overall_accuracy_pct'], '% | MAE: ±', ledger['mae_variance_c'], '°C')

asyncio.run(test())
