# Caps
Allows you to get the correct punctuation for certain words when your keyboard is not in the correct language. Useful when developing a software / website in French with an English keyboard.

**[fr]** Permet l'obtention de la bonne ponctuation pour certains mots lorsque votre clavier n'est pas dans la bonne langue. Utile lors du d**é**veloppement d'un logiciel/site web en fran**ç**ais avec un clavier en anglais.

**[pol]** Pozwala uzyska**ć** poprawn**ą** interpunkcj**ę** dla niekt**ó**rych s**łó**w, gdy klawiatura nie jest we w**ł**a**ś**ciwym j**ę**zyku. Przydatne przy tworzeniu oprogramowania / strony internetowej w j**ę**zyku francuskim z angielsk**ą** klawiatur**ą**.


## Usage
```
$ caps <string> <original language> <target language>
```
[Supported languages (# ISO 639-1)](https://cloud.google.com/translate/docs/languages)
## Example
```
$ caps "All my students are studying" en fr
```
Tous mes **é**tudiants  **é**tudient

```
$ caps "All my students are studying" en pol
```
Wszyscy moi studenci si**ę** ucz**ą**


## Installation
1. Add your Google Cloud Platform API KEY inside the .env

2. Install caps with:
```
make
make install
[cd .. ]
[rm -rf caps]
```

## Note
Caps was helpful in writing this file, written only with an English keyboard.

**[fr]** Caps m'a  **é**t**é** utile pour la r**é**daction de ce fichier, **é**crit uniquement avec un clavier anglais.

**[pol]** Caps by**ł** pomocny w pisaniu tego pliku, napisany tylko angielsk**ą** klawiatur**ą**.
