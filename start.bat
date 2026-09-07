@echo off
TITLE HEATGUARD AI - Launcher
echo ======================================================================
echo           HEATGUARD AI - BENGALURU BBMP HEATWAVE WARNING SYSTEM
echo                       Smart India Hackathon (SIH)
echo ======================================================================
echo.

echo [1/2] Launching FastAPI Backend Server (Port 8000)...
start "HEATGUARD Backend API" cmd /k "cd backend && pip install -r requirements.txt && python run.py"

timeout /t 3 /nobreak >nul

echo [2/2] Launching React Frontend (Port 5173)...
start "HEATGUARD Frontend UI" cmd /k "cd frontend && npm install && npm run dev"

echo.
echo ======================================================================
echo Systems Initialized!
echo Frontend Dashboard: http://localhost:5173
echo Backend API Docs:   http://localhost:8000/docs
echo ======================================================================
echo.
pause
