"""
HEATGUARD Backend Launcher
Runs FastAPI server with Uvicorn on localhost:8000
"""

import uvicorn

if __name__ == "__main__":
    print("=" * 65)
    print("🛡️  STARTING HEATGUARD BACKEND API (Bengaluru BBMP Edition)")
    print("📍  Endpoints accessible at: http://localhost:8000")
    print("📄  Interactive API Docs:   http://localhost:8000/docs")
    print("=" * 65)
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
