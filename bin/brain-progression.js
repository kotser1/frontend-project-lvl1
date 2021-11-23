#!/usr/bin/env node
import playGame from '../src/index.js';
import { getProgressionGameData, rules } from '../src/games/progression.js';

playGame(rules, getProgressionGameData);
