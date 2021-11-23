#!/usr/bin/env node
import playGame from '../src/index.js';
import { getGcdGameData, rules } from '../src/games/gcd.js';

playGame(rules, getGcdGameData);
