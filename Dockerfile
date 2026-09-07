# Multi-stage Dockerfile for HEATGUARD (Bengaluru BBMP Edition)
# Builds FastAPI Backend and serves the React production bundle

# --- Stage 1: Build Frontend ---
FROM node:18-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# --- Stage 2: Python Backend ---
FROM python:3.11-slim
WORKDIR /app

# Install dependencies
COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend source
COPY backend/ ./backend

# Copy built frontend assets into static dir
COPY --from=frontend-builder /app/frontend/dist ./frontend_dist

ENV PORT=8000
EXPOSE 8000

CMD ["python", "backend/run.py"]
