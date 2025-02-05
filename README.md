# NestJS MQTT Application

Aplikasi NestJS sederhana untuk menerima data melalui HTTP POST dan meneruskannya ke broker MQTT.

## Fitur

- Menerima data POST dengan format JSON
- Meneruskan data ke broker MQTT
- Dokumentasi API dengan Swagger
- Deployment dengan Docker

## Prasyarat

- Node.js (versi 18 atau lebih tinggi)
- Docker (opsional, untuk deployment)
- Akses ke broker MQTT

## Instalasi

1. Clone repository:

```bash
git clone https://github.com/mamosdev/nestjs-mqtt-app
cd nestjs-mqtt-app
```

2. Install dependencies:

```bash
npm install
```

3. Jalankan aplikasi:

```bash
npm run start:dev
```

Aplikasi akan berjalan di `http://localhost:3000`

## Penggunaan API

### Endpoint

- POST `/data`
  - Menerima data JSON dengan format:
    ```json
    {
      "nama": "string",
      "email": "string"
    }
    ```

### Dokumentasi Swagger

Akses dokumentasi Swagger di `http://localhost:3000/api`

## Deployment dengan Docker

1. Build Docker image:

```bash
docker build -t nestjs-mqtt-app .
```

2. Jalankan container:

```bash
docker run -p 3000:3000 nestjs-mqtt-app
```

## Konfigurasi MQTT

Konfigurasi broker MQTT:

- Host: 92.3.128.100
- Port: 1883
- Username: demo
- Password: @Dmin123456
- Topic: datanestjs

## Testing

Anda dapat menguji API menggunakan curl:

```bash
curl -X POST http://localhost:3000/data \
  -H "Content-Type: application/json" \
  -d '{"nama":"John Doe","email":"john@example.com"}'
```

## Struktur Proyek

```
.
├── src/
│   ├── dto/
│   │   └── data.dto.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   ├── app.module.ts
│   └── main.ts
├── Dockerfile
├── package.json
└── README.md
```
