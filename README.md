# How to Run 'Muziek' Locally

### Pre-Requisite

1. Go to [RapidAPI](https://rapidapi.com/) and sign in to your account

2. Go to [Deezer API](https://rapidapi.com/deezerdevs/api/deezer-1/) and look up for your X-RapidAPI-Key

3. Copy the X-RapidAPI-Key value

### Running the Project

1. Clone project's repository

```sh
git clone https://github.com/ramaastra/muziek.git
```

2. Go into the project directory
```sh
cd muziek/
```

3. Install all dependencies

```sh
npm install
```

4. Rename ```.env.local.example``` file into ```.env.local```

5. Inside the ```.env.local``` file, change the ```<API_KEY>``` with the corresponding X-RapidAPI-Key value that already copied before

6. Run the project

```sh
npm run dev
```
