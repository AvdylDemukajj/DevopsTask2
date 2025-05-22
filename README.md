# Jenkins Welcome App

Ky është një aplikacion i thjeshtë Node.js që shfaq "Welcome to Jenkins".

## Si të ekzekutoni aplikacionin

### Lokalisht
1. Instaloni varësitë:
```bash
npm install
```

2. Ekzekutoni aplikacionin:
```bash
npm start
```

### Me Docker
1. Ndërtoni imazhin:
```bash
docker build -t jenkins-welcome-app .
```

2. Ekzekutoni kontejnerin:
```bash
docker run -p 3000:3000 jenkins-welcome-app
```

Aplikacioni do të jetë i aksesueshëm në http://localhost:3000