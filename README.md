# Pig Latin

#### Basic HTML, CSS and JavaScript Exercise from [learnhowtoprogram.com](https://www.learnhowtoprogram.com), 30.01.2018

#### By Slavcho Mitrov

## Description

This webpage translates sentences into **pig latin**. It uses a function with if/else branching and looping through the array of words using map, as well as traditional for loops and returns the translated sentence. The branch named 'proba' uses regular expressions to match a pattern of vowels.

## Specifications

* The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
  * Example Input: 3
  * Example Output: 3
* The program adds "ay" to single-letter words beginning with a vowel.
  * Example Input: i
  * Example Output: iway
* The program adds "way" to single-letter word beginning with a vowel regardless of capitalization
  * Example Input: I
  * Example Output: iway
* The program adds "way" to multiple letter word beginning with a vowel
  * Example Input: english
  * Example Output: englishway
* The program moves the first consonant letter to the end of the word, and ads "ay"
  * Example Input: country
  * Example Output: ountryCay
* The program moves the first consonant letters to the end of the word, and ads "ay"
  * Example Input: country
  * Example Output: ountryCay
* The program moves all of the first consonants to the end of the word, and ads "ay"
  * Example Input: scream
  * Example Output: eamScray
* The program handles a whole sentences and translates every word in pig latin
  * Example Input: english girls image
  * Example Output: englishway irlsGay imageway

## Technologies used

* HTML
* CSS
* JavaScript
* jQuery

## Setup

* To see the page open the link https://jombastic.github.io/pig-latin

* To download the page click clone or download on github

### License

Copyright (c) 2018 **Slavcho Mitrov**

This software is licensed under the MIT license.
