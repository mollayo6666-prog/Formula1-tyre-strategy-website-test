window.F1_DATA={
    "manifest":  {
                     "package":  "f1-2026-strategy-data",
                     "version":  "0.1.0",
                     "created":  "2026-07-22",
                     "files":  [
                                   "data/source-catalog.json",
                                   "data/season.json",
                                   "data/teams.json",
                                   "data/drivers.json",
                                   "data/circuits.json",
                                   "data/tyres.json",
                                   "data/regulations.json",
                                   "data/model-config.json",
                                   "data/example-race-request.json",
                                   "data/all-in-one.json",
                                   "schemas/race-request.schema.json",
                                   "schemas/strategy-response.schema.json",
                                   "README.md"
                               ]
                 },
    "sources":  {
                    "snapshotDate":  "2026-07-22",
                    "sources":  [
                                    {
                                        "id":  "f1-teams-2026",
                                        "publisher":  "Formula 1",
                                        "title":  "F1 Teams 2026",
                                        "url":  "https://www.formula1.com/en/teams",
                                        "usedFor":  [
                                                        "team list",
                                                        "driver-team pairings"
                                                    ]
                                    },
                                    {
                                        "id":  "f1-drivers-2026",
                                        "publisher":  "Formula 1",
                                        "title":  "F1 Drivers 2026",
                                        "url":  "https://www.formula1.com/en/drivers",
                                        "usedFor":  [
                                                        "driver list",
                                                        "driver-team pairings"
                                                    ]
                                    },
                                    {
                                        "id":  "f1-driver-numbers-2026",
                                        "publisher":  "Formula 1",
                                        "title":  "All the 2026 F1 driver numbers confirmed in full",
                                        "url":  "https://www.formula1.com/en/latest/article/all-the-2026-f1-driver-numbers-confirmed-in-full.5rh7o9mPntG7NerzVk9onc",
                                        "usedFor":  [
                                                        "2026 race numbers"
                                                    ]
                                    },
                                    {
                                        "id":  "f1-driver-standings-2026",
                                        "publisher":  "Formula 1",
                                        "title":  "2026 Drivers\u0027 Standings",
                                        "url":  "https://www.formula1.com/en/results/2026/drivers",
                                        "usedFor":  [
                                                        "driver standings snapshot",
                                                        "driver points"
                                                    ]
                                    },
                                    {
                                        "id":  "f1-team-standings-2026",
                                        "publisher":  "Formula 1",
                                        "title":  "2026 Teams\u0027 Standings",
                                        "url":  "https://www.formula1.com/en/results/2026/team",
                                        "usedFor":  [
                                                        "team standings snapshot",
                                                        "team points"
                                                    ]
                                    },
                                    {
                                        "id":  "f1-silverstone-2026",
                                        "publisher":  "Formula 1",
                                        "title":  "British Grand Prix 2026",
                                        "url":  "https://www.formula1.com/en/racing/2026/great-britain",
                                        "usedFor":  [
                                                        "circuit length",
                                                        "race laps",
                                                        "race distance",
                                                        "Sprint format",
                                                        "2026 result"
                                                    ]
                                    },
                                    {
                                        "id":  "f1-spa-2026",
                                        "publisher":  "Formula 1",
                                        "title":  "Belgian Grand Prix 2026",
                                        "url":  "https://www.formula1.com/en/racing/2026/belgium",
                                        "usedFor":  [
                                                        "circuit length",
                                                        "race laps",
                                                        "race distance",
                                                        "2026 result"
                                                    ]
                                    },
                                    {
                                        "id":  "f1-suzuka-2026",
                                        "publisher":  "Formula 1",
                                        "title":  "Japanese Grand Prix 2026",
                                        "url":  "https://www.formula1.com/en/racing/2026/japan",
                                        "usedFor":  [
                                                        "circuit length",
                                                        "race laps",
                                                        "race distance",
                                                        "2026 result"
                                                    ]
                                    },
                                    {
                                        "id":  "pirelli-2026-range",
                                        "publisher":  "Pirelli",
                                        "title":  "Pirelli reveals 2026 F1 tyres",
                                        "url":  "https://press.pirelli.com/pirelli-reveals-2026-f1-tyres-a-fresh-logo-design-and-new-compounds/",
                                        "usedFor":  [
                                                        "C1-C5 range",
                                                        "Intermediate",
                                                        "Full Wet",
                                                        "2026 tyre dimensions"
                                                    ]
                                    },
                                    {
                                        "id":  "pirelli-silverstone-2026-preview",
                                        "publisher":  "Pirelli",
                                        "title":  "The challenges of Silverstone, the cradle of motorsport",
                                        "url":  "https://press.pirelli.com/the-challenges-of-silverstone-the-cradle-of-motorsport/",
                                        "usedFor":  [
                                                        "C1/C2/C3 nomination",
                                                        "front axle stress",
                                                        "left-front wear",
                                                        "high lateral loads"
                                                    ]
                                    },
                                    {
                                        "id":  "pirelli-silverstone-2026-race",
                                        "publisher":  "Pirelli",
                                        "title":  "Leclerc paints Silverstone red",
                                        "url":  "https://press.pirelli.com/leclerc-paints-silverstone-red/",
                                        "usedFor":  [
                                                        "2026 race strategy reference",
                                                        "Medium-to-Hard baseline",
                                                        "late Safety Car effects"
                                                    ]
                                    },
                                    {
                                        "id":  "pirelli-spa-2026-preview",
                                        "publisher":  "Pirelli",
                                        "title":  "Formula 1 faces its Spa-Francorchamps exam",
                                        "url":  "https://press.pirelli.com/formula-1-faces-its-spa-francorchamps-exam/",
                                        "usedFor":  [
                                                        "C2/C3/C4 nomination",
                                                        "tyre stress",
                                                        "track characteristics"
                                                    ]
                                    },
                                    {
                                        "id":  "pirelli-spa-2026-race",
                                        "publisher":  "Pirelli",
                                        "title":  "Antonelli wins at the legendary Spa-Francorchamps circuit",
                                        "url":  "https://press.pirelli.com/antonelli-wins-at-the-legendary-spa-francorchamps-circuit/",
                                        "usedFor":  [
                                                        "2026 race strategy reference",
                                                        "Medium-to-Hard baseline",
                                                        "degradation observations"
                                                    ]
                                    },
                                    {
                                        "id":  "pirelli-suzuka-2026-preview",
                                        "publisher":  "Pirelli",
                                        "title":  "The Suzuka challenge with the hardest trio in the range",
                                        "url":  "https://press.pirelli.com/the-suzuka-challenge-with-the-hardest-trio-in-the-range/",
                                        "usedFor":  [
                                                        "C1/C2/C3 nomination",
                                                        "continuous direction changes",
                                                        "high tyre loads"
                                                    ]
                                    },
                                    {
                                        "id":  "pirelli-suzuka-2026-race",
                                        "publisher":  "Pirelli",
                                        "title":  "Second consecutive Grand Prix victory for Antonelli",
                                        "url":  "https://press.pirelli.com/second-consecutive-grand-prix-victory-for-antonelli/",
                                        "usedFor":  [
                                                        "2026 race strategy reference",
                                                        "Medium-to-Hard baseline",
                                                        "Safety Car effect"
                                                    ]
                                    },
                                    {
                                        "id":  "fia-sporting-2026-issue-07",
                                        "publisher":  "FIA",
                                        "title":  "2026 Formula 1 Sporting Regulations — Section B, Issue 07",
                                        "url":  "https://www.fia.com/system/files/documents/fia_2026_f1_regulations_-_section_b_sporting_-_iss_07_-_2026-06-25.pdf",
                                        "usedFor":  [
                                                        "tyre allocation",
                                                        "dry-race compound rule",
                                                        "wet exceptions",
                                                        "Sprint tyre rules"
                                                    ]
                                    },
                                    {
                                        "id":  "fia-2026-calendar",
                                        "publisher":  "FIA",
                                        "title":  "FIA and Formula 1 announce 2026 calendar",
                                        "url":  "https://www.fia.com/news/fia-and-formula-1-announce-2026-calendar",
                                        "usedFor":  [
                                                        "2026 calendar",
                                                        "event order"
                                                    ]
                                    },
                                    {
                                        "id":  "fia-2026-called-off",
                                        "publisher":  "FIA",
                                        "title":  "Bahrain and Saudi Arabian Grands Prix will not take place in April",
                                        "url":  "https://www.fia.com/news/bahrain-and-saudi-arabian-grands-prix-will-not-take-place-april",
                                        "usedFor":  [
                                                        "called-off status"
                                                    ]
                                    },
                                    {
                                        "id":  "formula1-circuit-guide",
                                        "publisher":  "Formula 1",
                                        "title":  "2026 F1 race calendar and circuit guides",
                                        "url":  "https://www.formula1.com/en/racing/2026",
                                        "usedFor":  [
                                                        "circuit length",
                                                        "lap count",
                                                        "circuit identity"
                                                    ]
                                    },
                                    {
                                        "id":  "pirelli-2026-compounds",
                                        "publisher":  "Pirelli",
                                        "title":  "2026 tyre compound choices",
                                        "url":  "https://press.pirelli.com/?h=1\u0026t=2026+tyre+compound+choices",
                                        "usedFor":  [
                                                        "official compound nominations"
                                                    ]
                                    },
                                    {
                                        "id":  "jolpica-database-dump",
                                        "publisher":  "Jolpica F1",
                                        "title":  "Formula One historical database dump",
                                        "url":  "https://api.jolpi.ca/data/dumps/",
                                        "usedFor":  [
                                                        "race results since 2000",
                                                        "pit stops"
                                                    ]
                                    },
                                    {
                                        "id":  "racehooks-fastf1-stints",
                                        "publisher":  "RaceHooks / FastF1",
                                        "title":  "Historical F1 stint data",
                                        "url":  "https://api.racehooks.io/",
                                        "usedFor":  [
                                                        "actual tyre compounds",
                                                        "full race stints since 2019"
                                                    ]
                                    }
                                ]
                },
    "season":  {
                   "season":  2026,
                   "name":  "2026 FIA Formula One World Championship",
                   "dataSnapshotDate":  "2026-07-22",
                   "gridSize":  {
                                    "teams":  11,
                                    "drivers":  22
                                },
                   "supportedCircuits":  [
                                             "albert-park",
                                             "shanghai",
                                             "suzuka",
                                             "bahrain",
                                             "jeddah",
                                             "miami",
                                             "villeneuve",
                                             "monaco",
                                             "catalunya",
                                             "red-bull-ring",
                                             "silverstone",
                                             "spa-francorchamps",
                                             "hungaroring",
                                             "zandvoort",
                                             "monza",
                                             "madring",
                                             "baku",
                                             "marina-bay",
                                             "americas",
                                             "rodriguez",
                                             "interlagos",
                                             "las-vegas",
                                             "losail",
                                             "yas-marina"
                                         ],
                   "regulationSetId":  "fia-2026-sporting-issue-07",
                   "tyreSetId":  "pirelli-2026",
                   "dataPolicy":  {
                                      "officialFacts":  "Stored under officialSnapshot or officialRule provenance.",
                                      "modelValues":  "Stored under strategyModelSeed and must not be displayed as official F1 data.",
                                      "recommendedRefresh":  "Refresh standings and FIA issue number after each race or regulation update."
                                  },
                   "sourceRefs":  [
                                      "f1-teams-2026",
                                      "f1-drivers-2026",
                                      "f1-driver-standings-2026",
                                      "f1-team-standings-2026",
                                      "fia-sporting-2026-issue-07"
                                  ],
                   "calendarNote":  "Bahrain and Saudi Arabia were called off by the FIA for April 2026; retained for historical analysis and simulation."
               },
    "teams":  [
                  {
                      "id":  "mercedes",
                      "name":  "Mercedes",
                      "season":  2026,
                      "standings":  {
                                        "position":  1,
                                        "points":  358,
                                        "snapshotDate":  "2026-07-22",
                                        "provenance":  "officialSnapshot",
                                        "sourceRefs":  [
                                                           "f1-team-standings-2026"
                                                       ]
                                    },
                      "drivers":  [
                                      "kimi-antonelli",
                                      "george-russell"
                                  ],
                      "presentation":  {
                                           "uiAccentHex":  "#00A19C",
                                           "note":  "Design seed only; not claimed as an official brand colour."
                                       },
                      "strategyModelSeed":  {
                                                "racePaceIndex":  95.0,
                                                "tyreDegradationMultiplier":  0.996,
                                                "tyreWarmupMultiplier":  0.992,
                                                "dirtyAirSensitivityMultiplier":  1.0,
                                                "pitStopExecutionSeconds":  2.6,
                                                "reliabilityMultiplier":  1.0,
                                                "confidence":  "low",
                                                "provenance":  "modelDerivedFrom2026ConstructorPoints",
                                                "calibrationRequired":  true
                                            },
                      "sourceRefs":  [
                                         "f1-teams-2026",
                                         "f1-team-standings-2026"
                                     ]
                  },
                  {
                      "id":  "ferrari",
                      "name":  "Ferrari",
                      "season":  2026,
                      "standings":  {
                                        "position":  2,
                                        "points":  285,
                                        "snapshotDate":  "2026-07-22",
                                        "provenance":  "officialSnapshot",
                                        "sourceRefs":  [
                                                           "f1-team-standings-2026"
                                                       ]
                                    },
                      "drivers":  [
                                      "lewis-hamilton",
                                      "charles-leclerc"
                                  ],
                      "presentation":  {
                                           "uiAccentHex":  "#E80020",
                                           "note":  "Design seed only; not claimed as an official brand colour."
                                       },
                      "strategyModelSeed":  {
                                                "racePaceIndex":  92.5,
                                                "tyreDegradationMultiplier":  0.999,
                                                "tyreWarmupMultiplier":  0.994,
                                                "dirtyAirSensitivityMultiplier":  1.0,
                                                "pitStopExecutionSeconds":  2.6,
                                                "reliabilityMultiplier":  1.0,
                                                "confidence":  "low",
                                                "provenance":  "modelDerivedFrom2026ConstructorPoints",
                                                "calibrationRequired":  true
                                            },
                      "sourceRefs":  [
                                         "f1-teams-2026",
                                         "f1-team-standings-2026"
                                     ]
                  },
                  {
                      "id":  "mclaren",
                      "name":  "McLaren",
                      "season":  2026,
                      "standings":  {
                                        "position":  3,
                                        "points":  195,
                                        "snapshotDate":  "2026-07-22",
                                        "provenance":  "officialSnapshot",
                                        "sourceRefs":  [
                                                           "f1-team-standings-2026"
                                                       ]
                                    },
                      "drivers":  [
                                      "lando-norris",
                                      "oscar-piastri"
                                  ],
                      "presentation":  {
                                           "uiAccentHex":  "#FF8000",
                                           "note":  "Design seed only; not claimed as an official brand colour."
                                       },
                      "strategyModelSeed":  {
                                                "racePaceIndex":  89.0,
                                                "tyreDegradationMultiplier":  1.004,
                                                "tyreWarmupMultiplier":  0.998,
                                                "dirtyAirSensitivityMultiplier":  1.0,
                                                "pitStopExecutionSeconds":  2.6,
                                                "reliabilityMultiplier":  1.0,
                                                "confidence":  "low",
                                                "provenance":  "modelDerivedFrom2026ConstructorPoints",
                                                "calibrationRequired":  true
                                            },
                      "sourceRefs":  [
                                         "f1-teams-2026",
                                         "f1-team-standings-2026"
                                     ]
                  },
                  {
                      "id":  "red-bull-racing",
                      "name":  "Red Bull Racing",
                      "season":  2026,
                      "standings":  {
                                        "position":  4,
                                        "points":  151,
                                        "snapshotDate":  "2026-07-22",
                                        "provenance":  "officialSnapshot",
                                        "sourceRefs":  [
                                                           "f1-team-standings-2026"
                                                       ]
                                    },
                      "drivers":  [
                                      "max-verstappen",
                                      "isack-hadjar"
                                  ],
                      "presentation":  {
                                           "uiAccentHex":  "#3671C6",
                                           "note":  "Design seed only; not claimed as an official brand colour."
                                       },
                      "strategyModelSeed":  {
                                                "racePaceIndex":  86.9,
                                                "tyreDegradationMultiplier":  1.008,
                                                "tyreWarmupMultiplier":  1.0,
                                                "dirtyAirSensitivityMultiplier":  1.0,
                                                "pitStopExecutionSeconds":  2.6,
                                                "reliabilityMultiplier":  1.0,
                                                "confidence":  "low",
                                                "provenance":  "modelDerivedFrom2026ConstructorPoints",
                                                "calibrationRequired":  true
                                            },
                      "sourceRefs":  [
                                         "f1-teams-2026",
                                         "f1-team-standings-2026"
                                     ]
                  },
                  {
                      "id":  "alpine",
                      "name":  "Alpine",
                      "season":  2026,
                      "standings":  {
                                        "position":  5,
                                        "points":  61,
                                        "snapshotDate":  "2026-07-22",
                                        "provenance":  "officialSnapshot",
                                        "sourceRefs":  [
                                                           "f1-team-standings-2026"
                                                       ]
                                    },
                      "drivers":  [
                                      "pierre-gasly",
                                      "franco-colapinto"
                                  ],
                      "presentation":  {
                                           "uiAccentHex":  "#0093CC",
                                           "note":  "Design seed only; not claimed as an official brand colour."
                                       },
                      "strategyModelSeed":  {
                                                "racePaceIndex":  81.5,
                                                "tyreDegradationMultiplier":  1.016,
                                                "tyreWarmupMultiplier":  1.005,
                                                "dirtyAirSensitivityMultiplier":  1.0,
                                                "pitStopExecutionSeconds":  2.6,
                                                "reliabilityMultiplier":  1.0,
                                                "confidence":  "low",
                                                "provenance":  "modelDerivedFrom2026ConstructorPoints",
                                                "calibrationRequired":  true
                                            },
                      "sourceRefs":  [
                                         "f1-teams-2026",
                                         "f1-team-standings-2026"
                                     ]
                  },
                  {
                      "id":  "racing-bulls",
                      "name":  "Racing Bulls",
                      "season":  2026,
                      "standings":  {
                                        "position":  6,
                                        "points":  61,
                                        "snapshotDate":  "2026-07-22",
                                        "provenance":  "officialSnapshot",
                                        "sourceRefs":  [
                                                           "f1-team-standings-2026"
                                                       ]
                                    },
                      "drivers":  [
                                      "liam-lawson",
                                      "arvid-lindblad"
                                  ],
                      "presentation":  {
                                           "uiAccentHex":  "#6692FF",
                                           "note":  "Design seed only; not claimed as an official brand colour."
                                       },
                      "strategyModelSeed":  {
                                                "racePaceIndex":  81.5,
                                                "tyreDegradationMultiplier":  1.016,
                                                "tyreWarmupMultiplier":  1.005,
                                                "dirtyAirSensitivityMultiplier":  1.0,
                                                "pitStopExecutionSeconds":  2.6,
                                                "reliabilityMultiplier":  1.0,
                                                "confidence":  "low",
                                                "provenance":  "modelDerivedFrom2026ConstructorPoints",
                                                "calibrationRequired":  true
                                            },
                      "sourceRefs":  [
                                         "f1-teams-2026",
                                         "f1-team-standings-2026"
                                     ]
                  },
                  {
                      "id":  "haas",
                      "name":  "Haas F1 Team",
                      "season":  2026,
                      "standings":  {
                                        "position":  7,
                                        "points":  21,
                                        "snapshotDate":  "2026-07-22",
                                        "provenance":  "officialSnapshot",
                                        "sourceRefs":  [
                                                           "f1-team-standings-2026"
                                                       ]
                                    },
                      "drivers":  [
                                      "oliver-bearman",
                                      "esteban-ocon"
                                  ],
                      "presentation":  {
                                           "uiAccentHex":  "#B6BABD",
                                           "note":  "Design seed only; not claimed as an official brand colour."
                                       },
                      "strategyModelSeed":  {
                                                "racePaceIndex":  77.6,
                                                "tyreDegradationMultiplier":  1.022,
                                                "tyreWarmupMultiplier":  1.009,
                                                "dirtyAirSensitivityMultiplier":  1.0,
                                                "pitStopExecutionSeconds":  2.6,
                                                "reliabilityMultiplier":  1.0,
                                                "confidence":  "low",
                                                "provenance":  "modelDerivedFrom2026ConstructorPoints",
                                                "calibrationRequired":  true
                                            },
                      "sourceRefs":  [
                                         "f1-teams-2026",
                                         "f1-team-standings-2026"
                                     ]
                  },
                  {
                      "id":  "williams",
                      "name":  "Williams",
                      "season":  2026,
                      "standings":  {
                                        "position":  8,
                                        "points":  11,
                                        "snapshotDate":  "2026-07-22",
                                        "provenance":  "officialSnapshot",
                                        "sourceRefs":  [
                                                           "f1-team-standings-2026"
                                                       ]
                                    },
                      "drivers":  [
                                      "carlos-sainz",
                                      "alexander-albon"
                                  ],
                      "presentation":  {
                                           "uiAccentHex":  "#64C4FF",
                                           "note":  "Design seed only; not claimed as an official brand colour."
                                       },
                      "strategyModelSeed":  {
                                                "racePaceIndex":  76.0,
                                                "tyreDegradationMultiplier":  1.024,
                                                "tyreWarmupMultiplier":  1.011,
                                                "dirtyAirSensitivityMultiplier":  1.0,
                                                "pitStopExecutionSeconds":  2.6,
                                                "reliabilityMultiplier":  1.0,
                                                "confidence":  "low",
                                                "provenance":  "modelDerivedFrom2026ConstructorPoints",
                                                "calibrationRequired":  true
                                            },
                      "sourceRefs":  [
                                         "f1-teams-2026",
                                         "f1-team-standings-2026"
                                     ]
                  },
                  {
                      "id":  "audi",
                      "name":  "Audi",
                      "season":  2026,
                      "standings":  {
                                        "position":  9,
                                        "points":  10,
                                        "snapshotDate":  "2026-07-22",
                                        "provenance":  "officialSnapshot",
                                        "sourceRefs":  [
                                                           "f1-team-standings-2026"
                                                       ]
                                    },
                      "drivers":  [
                                      "gabriel-bortoleto",
                                      "nico-hulkenberg"
                                  ],
                      "presentation":  {
                                           "uiAccentHex":  "#E31B23",
                                           "note":  "Design seed only; not claimed as an official brand colour."
                                       },
                      "strategyModelSeed":  {
                                                "racePaceIndex":  75.8,
                                                "tyreDegradationMultiplier":  1.024,
                                                "tyreWarmupMultiplier":  1.011,
                                                "dirtyAirSensitivityMultiplier":  1.0,
                                                "pitStopExecutionSeconds":  2.6,
                                                "reliabilityMultiplier":  1.0,
                                                "confidence":  "low",
                                                "provenance":  "modelDerivedFrom2026ConstructorPoints",
                                                "calibrationRequired":  true
                                            },
                      "sourceRefs":  [
                                         "f1-teams-2026",
                                         "f1-team-standings-2026"
                                     ]
                  },
                  {
                      "id":  "aston-martin",
                      "name":  "Aston Martin",
                      "season":  2026,
                      "standings":  {
                                        "position":  10,
                                        "points":  1,
                                        "snapshotDate":  "2026-07-22",
                                        "provenance":  "officialSnapshot",
                                        "sourceRefs":  [
                                                           "f1-team-standings-2026"
                                                       ]
                                    },
                      "drivers":  [
                                      "fernando-alonso",
                                      "lance-stroll"
                                  ],
                      "presentation":  {
                                           "uiAccentHex":  "#229971",
                                           "note":  "Design seed only; not claimed as an official brand colour."
                                       },
                      "strategyModelSeed":  {
                                                "racePaceIndex":  73.2,
                                                "tyreDegradationMultiplier":  1.028,
                                                "tyreWarmupMultiplier":  1.014,
                                                "dirtyAirSensitivityMultiplier":  1.0,
                                                "pitStopExecutionSeconds":  2.6,
                                                "reliabilityMultiplier":  1.0,
                                                "confidence":  "low",
                                                "provenance":  "modelDerivedFrom2026ConstructorPoints",
                                                "calibrationRequired":  true
                                            },
                      "sourceRefs":  [
                                         "f1-teams-2026",
                                         "f1-team-standings-2026"
                                     ]
                  },
                  {
                      "id":  "cadillac",
                      "name":  "Cadillac",
                      "season":  2026,
                      "standings":  {
                                        "position":  11,
                                        "points":  0,
                                        "snapshotDate":  "2026-07-22",
                                        "provenance":  "officialSnapshot",
                                        "sourceRefs":  [
                                                           "f1-team-standings-2026"
                                                       ]
                                    },
                      "drivers":  [
                                      "valtteri-bottas",
                                      "sergio-perez"
                                  ],
                      "presentation":  {
                                           "uiAccentHex":  "#B8B8B8",
                                           "note":  "Design seed only; not claimed as an official brand colour."
                                       },
                      "strategyModelSeed":  {
                                                "racePaceIndex":  72.0,
                                                "tyreDegradationMultiplier":  1.03,
                                                "tyreWarmupMultiplier":  1.015,
                                                "dirtyAirSensitivityMultiplier":  1.0,
                                                "pitStopExecutionSeconds":  2.6,
                                                "reliabilityMultiplier":  1.0,
                                                "confidence":  "low",
                                                "provenance":  "modelDerivedFrom2026ConstructorPoints",
                                                "calibrationRequired":  true
                                            },
                      "sourceRefs":  [
                                         "f1-teams-2026",
                                         "f1-team-standings-2026"
                                     ]
                  }
              ],
    "drivers":  [
                    {
                        "id":  "kimi-antonelli",
                        "name":  "Kimi Antonelli",
                        "code":  "ANT",
                        "raceNumber":  12,
                        "nationality":  {
                                            "code":  "ITA",
                                            "label":  "Italian"
                                        },
                        "teamId":  "mercedes",
                        "season":  2026,
                        "standings":  {
                                          "position":  1,
                                          "points":  204,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "developing",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  95.0,
                                                  "tyreManagementMultiplier":  0.995,
                                                  "wetSkillIndex":  84.8,
                                                  "trafficAndOvertakingIndex":  89.0,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "lewis-hamilton",
                        "name":  "Lewis Hamilton",
                        "code":  "HAM",
                        "raceNumber":  44,
                        "nationality":  {
                                            "code":  "GBR",
                                            "label":  "British"
                                        },
                        "teamId":  "ferrari",
                        "season":  2026,
                        "standings":  {
                                          "position":  2,
                                          "points":  159,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "veteran",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  92.1,
                                                  "tyreManagementMultiplier":  0.99,
                                                  "wetSkillIndex":  89.7,
                                                  "trafficAndOvertakingIndex":  91.3,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "george-russell",
                        "name":  "George Russell",
                        "code":  "RUS",
                        "raceNumber":  63,
                        "nationality":  {
                                            "code":  "GBR",
                                            "label":  "British"
                                        },
                        "teamId":  "mercedes",
                        "season":  2026,
                        "standings":  {
                                          "position":  3,
                                          "points":  154,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "experienced",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  91.7,
                                                  "tyreManagementMultiplier":  0.993,
                                                  "wetSkillIndex":  87.6,
                                                  "trafficAndOvertakingIndex":  89.6,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "charles-leclerc",
                        "name":  "Charles Leclerc",
                        "code":  "LEC",
                        "raceNumber":  16,
                        "nationality":  {
                                            "code":  "MON",
                                            "label":  "Monegasque"
                                        },
                        "teamId":  "ferrari",
                        "season":  2026,
                        "standings":  {
                                          "position":  4,
                                          "points":  126,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "experienced",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  89.6,
                                                  "tyreManagementMultiplier":  0.995,
                                                  "wetSkillIndex":  86.9,
                                                  "trafficAndOvertakingIndex":  88.2,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "lando-norris",
                        "name":  "Lando Norris",
                        "code":  "NOR",
                        "raceNumber":  1,
                        "nationality":  {
                                            "code":  "GBR",
                                            "label":  "British"
                                        },
                        "teamId":  "mclaren",
                        "season":  2026,
                        "standings":  {
                                          "position":  5,
                                          "points":  103,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "experienced",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  87.8,
                                                  "tyreManagementMultiplier":  0.998,
                                                  "wetSkillIndex":  86.2,
                                                  "trafficAndOvertakingIndex":  87.1,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "oscar-piastri",
                        "name":  "Oscar Piastri",
                        "code":  "PIA",
                        "raceNumber":  81,
                        "nationality":  {
                                            "code":  "AUS",
                                            "label":  "Australian"
                                        },
                        "teamId":  "mclaren",
                        "season":  2026,
                        "standings":  {
                                          "position":  6,
                                          "points":  92,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "established",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  86.8,
                                                  "tyreManagementMultiplier":  1.002,
                                                  "wetSkillIndex":  83.9,
                                                  "trafficAndOvertakingIndex":  85.0,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "max-verstappen",
                        "name":  "Max Verstappen",
                        "code":  "VER",
                        "raceNumber":  3,
                        "nationality":  {
                                            "code":  "NED",
                                            "label":  "Dutch"
                                        },
                        "teamId":  "red-bull-racing",
                        "season":  2026,
                        "standings":  {
                                          "position":  7,
                                          "points":  91,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "experienced",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  86.7,
                                                  "tyreManagementMultiplier":  0.999,
                                                  "wetSkillIndex":  85.8,
                                                  "trafficAndOvertakingIndex":  86.4,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "isack-hadjar",
                        "name":  "Isack Hadjar",
                        "code":  "HAD",
                        "raceNumber":  6,
                        "nationality":  {
                                            "code":  "FRA",
                                            "label":  "French"
                                        },
                        "teamId":  "red-bull-racing",
                        "season":  2026,
                        "standings":  {
                                          "position":  8,
                                          "points":  60,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "developing",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  83.6,
                                                  "tyreManagementMultiplier":  1.009,
                                                  "wetSkillIndex":  80.8,
                                                  "trafficAndOvertakingIndex":  81.5,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "pierre-gasly",
                        "name":  "Pierre Gasly",
                        "code":  "GAS",
                        "raceNumber":  10,
                        "nationality":  {
                                            "code":  "FRA",
                                            "label":  "French"
                                        },
                        "teamId":  "alpine",
                        "season":  2026,
                        "standings":  {
                                          "position":  9,
                                          "points":  42,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "experienced",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  81.3,
                                                  "tyreManagementMultiplier":  1.005,
                                                  "wetSkillIndex":  84.0,
                                                  "trafficAndOvertakingIndex":  82.8,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "liam-lawson",
                        "name":  "Liam Lawson",
                        "code":  "LAW",
                        "raceNumber":  30,
                        "nationality":  {
                                            "code":  "NZL",
                                            "label":  "New Zealander"
                                        },
                        "teamId":  "racing-bulls",
                        "season":  2026,
                        "standings":  {
                                          "position":  10,
                                          "points":  39,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "established",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  80.9,
                                                  "tyreManagementMultiplier":  1.009,
                                                  "wetSkillIndex":  81.8,
                                                  "trafficAndOvertakingIndex":  81.2,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "arvid-lindblad",
                        "name":  "Arvid Lindblad",
                        "code":  "LIN",
                        "raceNumber":  41,
                        "nationality":  {
                                            "code":  "GBR",
                                            "label":  "British"
                                        },
                        "teamId":  "racing-bulls",
                        "season":  2026,
                        "standings":  {
                                          "position":  11,
                                          "points":  22,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "rookie",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  78.2,
                                                  "tyreManagementMultiplier":  1.017,
                                                  "wetSkillIndex":  77.9,
                                                  "trafficAndOvertakingIndex":  77.3,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "franco-colapinto",
                        "name":  "Franco Colapinto",
                        "code":  "COL",
                        "raceNumber":  43,
                        "nationality":  {
                                            "code":  "ARG",
                                            "label":  "Argentine"
                                        },
                        "teamId":  "alpine",
                        "season":  2026,
                        "standings":  {
                                          "position":  12,
                                          "points":  19,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "developing",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  77.6,
                                                  "tyreManagementMultiplier":  1.016,
                                                  "wetSkillIndex":  78.7,
                                                  "trafficAndOvertakingIndex":  77.6,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "oliver-bearman",
                        "name":  "Oliver Bearman",
                        "code":  "BEA",
                        "raceNumber":  87,
                        "nationality":  {
                                            "code":  "GBR",
                                            "label":  "British"
                                        },
                        "teamId":  "haas",
                        "season":  2026,
                        "standings":  {
                                          "position":  13,
                                          "points":  18,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "developing",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  77.4,
                                                  "tyreManagementMultiplier":  1.016,
                                                  "wetSkillIndex":  78.6,
                                                  "trafficAndOvertakingIndex":  77.5,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "gabriel-bortoleto",
                        "name":  "Gabriel Bortoleto",
                        "code":  "BOR",
                        "raceNumber":  5,
                        "nationality":  {
                                            "code":  "BRA",
                                            "label":  "Brazilian"
                                        },
                        "teamId":  "audi",
                        "season":  2026,
                        "standings":  {
                                          "position":  14,
                                          "points":  10,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "developing",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  75.5,
                                                  "tyreManagementMultiplier":  1.018,
                                                  "wetSkillIndex":  77.9,
                                                  "trafficAndOvertakingIndex":  76.3,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "carlos-sainz",
                        "name":  "Carlos Sainz",
                        "code":  "SAI",
                        "raceNumber":  55,
                        "nationality":  {
                                            "code":  "ESP",
                                            "label":  "Spanish"
                                        },
                        "teamId":  "williams",
                        "season":  2026,
                        "standings":  {
                                          "position":  15,
                                          "points":  6,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "experienced",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  74.3,
                                                  "tyreManagementMultiplier":  1.014,
                                                  "wetSkillIndex":  81.5,
                                                  "trafficAndOvertakingIndex":  78.3,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "alexander-albon",
                        "name":  "Alexander Albon",
                        "code":  "ALB",
                        "raceNumber":  23,
                        "nationality":  {
                                            "code":  "THA",
                                            "label":  "Thai"
                                        },
                        "teamId":  "williams",
                        "season":  2026,
                        "standings":  {
                                          "position":  16,
                                          "points":  5,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "experienced",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  73.9,
                                                  "tyreManagementMultiplier":  1.014,
                                                  "wetSkillIndex":  81.4,
                                                  "trafficAndOvertakingIndex":  78.0,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "esteban-ocon",
                        "name":  "Esteban Ocon",
                        "code":  "OCO",
                        "raceNumber":  31,
                        "nationality":  {
                                            "code":  "FRA",
                                            "label":  "French"
                                        },
                        "teamId":  "haas",
                        "season":  2026,
                        "standings":  {
                                          "position":  17,
                                          "points":  3,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "experienced",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  73.0,
                                                  "tyreManagementMultiplier":  1.015,
                                                  "wetSkillIndex":  81.0,
                                                  "trafficAndOvertakingIndex":  77.5,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "fernando-alonso",
                        "name":  "Fernando Alonso",
                        "code":  "ALO",
                        "raceNumber":  14,
                        "nationality":  {
                                            "code":  "ESP",
                                            "label":  "Spanish"
                                        },
                        "teamId":  "aston-martin",
                        "season":  2026,
                        "standings":  {
                                          "position":  18,
                                          "points":  1,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "veteran",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  71.8,
                                                  "tyreManagementMultiplier":  1.015,
                                                  "wetSkillIndex":  82.6,
                                                  "trafficAndOvertakingIndex":  78.1,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "nico-hulkenberg",
                        "name":  "Nico Hulkenberg",
                        "code":  "HUL",
                        "raceNumber":  27,
                        "nationality":  {
                                            "code":  "GER",
                                            "label":  "German"
                                        },
                        "teamId":  "audi",
                        "season":  2026,
                        "standings":  {
                                          "position":  19,
                                          "points":  0,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "veteran",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  70.0,
                                                  "tyreManagementMultiplier":  1.017,
                                                  "wetSkillIndex":  82.0,
                                                  "trafficAndOvertakingIndex":  76.9,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "valtteri-bottas",
                        "name":  "Valtteri Bottas",
                        "code":  "BOT",
                        "raceNumber":  77,
                        "nationality":  {
                                            "code":  "FIN",
                                            "label":  "Finnish"
                                        },
                        "teamId":  "cadillac",
                        "season":  2026,
                        "standings":  {
                                          "position":  20,
                                          "points":  0,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "veteran",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  70.0,
                                                  "tyreManagementMultiplier":  1.017,
                                                  "wetSkillIndex":  82.0,
                                                  "trafficAndOvertakingIndex":  76.9,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "sergio-perez",
                        "name":  "Sergio Perez",
                        "code":  "PER",
                        "raceNumber":  11,
                        "nationality":  {
                                            "code":  "MEX",
                                            "label":  "Mexican"
                                        },
                        "teamId":  "cadillac",
                        "season":  2026,
                        "standings":  {
                                          "position":  21,
                                          "points":  0,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "veteran",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  70.0,
                                                  "tyreManagementMultiplier":  1.017,
                                                  "wetSkillIndex":  82.0,
                                                  "trafficAndOvertakingIndex":  76.9,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    },
                    {
                        "id":  "lance-stroll",
                        "name":  "Lance Stroll",
                        "code":  "STR",
                        "raceNumber":  18,
                        "nationality":  {
                                            "code":  "CAN",
                                            "label":  "Canadian"
                                        },
                        "teamId":  "aston-martin",
                        "season":  2026,
                        "standings":  {
                                          "position":  22,
                                          "points":  0,
                                          "snapshotDate":  "2026-07-22",
                                          "provenance":  "officialSnapshot",
                                          "sourceRefs":  [
                                                             "f1-driver-standings-2026"
                                                         ]
                                      },
                        "experienceBand":  "experienced",
                        "strategyModelSeed":  {
                                                  "racePaceIndex":  70.0,
                                                  "tyreManagementMultiplier":  1.019,
                                                  "wetSkillIndex":  80.0,
                                                  "trafficAndOvertakingIndex":  75.5,
                                                  "outLapWarmupMultiplier":  1.0,
                                                  "riskTolerance":  0.5,
                                                  "confidence":  "low",
                                                  "provenance":  "modelDerivedFrom2026PointsAndExperienceBand",
                                                  "calibrationRequired":  true
                                              },
                        "sourceRefs":  [
                                           "f1-drivers-2026",
                                           "f1-driver-numbers-2026",
                                           "f1-driver-standings-2026"
                                       ]
                    }
                ],
    "circuits":  {
                     "season":  2026,
                     "circuits":  [
                                      {
                                          "id":  "albert-park",
                                          "name":  "Albert Park Grand Prix Circuit",
                                          "grandPrix":  "Australian Grand Prix",
                                          "country":  "Australia",
                                          "eventFormat":  "standard",
                                          "hasSprint":  false,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  5.278,
                                                           "raceLaps":  58,
                                                           "raceDistanceKm":  306.124,
                                                           "firstGrandPrix":  1996,
                                                           "weekendTyres":  {
                                                                                "hard":  "C3",
                                                                                "medium":  "C4",
                                                                                "soft":  "C5"
                                                                            },
                                                           "tyreAllocationStatus":  "official-2026",
                                                           "coordinates":  [
                                                                               -37.8497,
                                                                               144.968
                                                                           ],
                                                           "turns":  14,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "street-mixed",
                                                                 "tyreSeverity":  3,
                                                                 "lateralLoad":  3,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  3,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  2,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  20.5,
                                                                 "safetyCarProbability":  0.48,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "albert-park-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  17,
                                                                                                            "max":  23
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "albert-park-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  33,
                                                                                                            "max":  39
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "albert-park-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C5",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  12,
                                                                                                            "max":  17
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "pitWindow":  {
                                                                                                            "min":  32,
                                                                                                            "max":  38
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "shanghai",
                                          "name":  "Shanghai International Circuit",
                                          "grandPrix":  "Chinese Grand Prix",
                                          "country":  "China",
                                          "eventFormat":  "standard",
                                          "hasSprint":  true,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  5.451,
                                                           "raceLaps":  56,
                                                           "raceDistanceKm":  305.256,
                                                           "firstGrandPrix":  2004,
                                                           "weekendTyres":  {
                                                                                "hard":  "C2",
                                                                                "medium":  "C3",
                                                                                "soft":  "C4"
                                                                            },
                                                           "tyreAllocationStatus":  "official-2026",
                                                           "coordinates":  [
                                                                               31.3389,
                                                                               121.2197
                                                                           ],
                                                           "turns":  16,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "mixed",
                                                                 "tyreSeverity":  4,
                                                                 "lateralLoad":  4,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  4,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  2,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  22,
                                                                 "safetyCarProbability":  0.31,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "shanghai-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  15,
                                                                                                            "max":  21
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "shanghai-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  32,
                                                                                                            "max":  38
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "shanghai-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  10,
                                                                                                            "max":  15
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "pitWindow":  {
                                                                                                            "min":  31,
                                                                                                            "max":  37
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "suzuka",
                                          "name":  "Suzuka Circuit",
                                          "grandPrix":  "Japanese Grand Prix",
                                          "country":  "Japan",
                                          "eventFormat":  "standard",
                                          "hasSprint":  false,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  5.807,
                                                           "raceLaps":  53,
                                                           "raceDistanceKm":  307.771,
                                                           "firstGrandPrix":  1987,
                                                           "weekendTyres":  {
                                                                                "hard":  "C1",
                                                                                "medium":  "C2",
                                                                                "soft":  "C3"
                                                                            },
                                                           "tyreAllocationStatus":  "official-2026",
                                                           "coordinates":  [
                                                                               34.8431,
                                                                               136.541
                                                                           ],
                                                           "turns":  18,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "high-speed-technical",
                                                                 "tyreSeverity":  5,
                                                                 "lateralLoad":  5,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  5,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  5,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  22,
                                                                 "safetyCarProbability":  0.31,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "suzuka-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  13,
                                                                                                            "max":  19
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C1",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "suzuka-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C1",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  30,
                                                                                                            "max":  36
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "suzuka-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  8,
                                                                                                            "max":  13
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C1",
                                                                                          "pitWindow":  {
                                                                                                            "min":  29,
                                                                                                            "max":  35
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "bahrain",
                                          "name":  "Bahrain International Circuit",
                                          "grandPrix":  "Bahrain Grand Prix",
                                          "country":  "Bahrain",
                                          "eventFormat":  "standard",
                                          "hasSprint":  false,
                                          "calendarStatus":  "called-off",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  5.412,
                                                           "raceLaps":  57,
                                                           "raceDistanceKm":  308.484,
                                                           "firstGrandPrix":  2004,
                                                           "weekendTyres":  {
                                                                                "hard":  "C1",
                                                                                "medium":  "C2",
                                                                                "soft":  "C3"
                                                                            },
                                                           "tyreAllocationStatus":  "model-until-pirelli-announcement",
                                                           "coordinates":  [
                                                                               26.0325,
                                                                               50.5106
                                                                           ],
                                                           "turns":  15,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "traction-braking",
                                                                 "tyreSeverity":  4,
                                                                 "lateralLoad":  4,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  4,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  2,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  23,
                                                                 "safetyCarProbability":  0.31,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "bahrain-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  15,
                                                                                                            "max":  21
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C1",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "bahrain-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C1",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  32,
                                                                                                            "max":  38
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "bahrain-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  10,
                                                                                                            "max":  15
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C1",
                                                                                          "pitWindow":  {
                                                                                                            "min":  31,
                                                                                                            "max":  37
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "jeddah",
                                          "name":  "Jeddah Corniche Circuit",
                                          "grandPrix":  "Saudi Arabian Grand Prix",
                                          "country":  "Saudi Arabia",
                                          "eventFormat":  "standard",
                                          "hasSprint":  false,
                                          "calendarStatus":  "called-off",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  6.175,
                                                           "raceLaps":  50,
                                                           "raceDistanceKm":  308.75,
                                                           "firstGrandPrix":  2021,
                                                           "weekendTyres":  {
                                                                                "hard":  "C2",
                                                                                "medium":  "C3",
                                                                                "soft":  "C4"
                                                                            },
                                                           "tyreAllocationStatus":  "model-until-pirelli-announcement",
                                                           "coordinates":  [
                                                                               21.6319,
                                                                               39.1044
                                                                           ],
                                                           "turns":  27,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "high-speed-street",
                                                                 "tyreSeverity":  3,
                                                                 "lateralLoad":  3,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  3,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  2,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  20.5,
                                                                 "safetyCarProbability":  0.48,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "jeddah-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  14,
                                                                                                            "max":  20
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "jeddah-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  28,
                                                                                                            "max":  34
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "jeddah-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  9,
                                                                                                            "max":  14
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "pitWindow":  {
                                                                                                            "min":  27,
                                                                                                            "max":  33
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "miami",
                                          "name":  "Miami International Autodrome",
                                          "grandPrix":  "Miami Grand Prix",
                                          "country":  "United States",
                                          "eventFormat":  "standard",
                                          "hasSprint":  true,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  5.412,
                                                           "raceLaps":  57,
                                                           "raceDistanceKm":  308.484,
                                                           "firstGrandPrix":  2022,
                                                           "weekendTyres":  {
                                                                                "hard":  "C3",
                                                                                "medium":  "C4",
                                                                                "soft":  "C5"
                                                                            },
                                                           "tyreAllocationStatus":  "official-2026",
                                                           "coordinates":  [
                                                                               25.9581,
                                                                               -80.2389
                                                                           ],
                                                           "turns":  19,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "street-mixed",
                                                                 "tyreSeverity":  3,
                                                                 "lateralLoad":  3,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  3,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  2,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  21.5,
                                                                 "safetyCarProbability":  0.48,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "miami-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  16,
                                                                                                            "max":  22
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "miami-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  32,
                                                                                                            "max":  38
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "miami-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C5",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  11,
                                                                                                            "max":  16
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "pitWindow":  {
                                                                                                            "min":  31,
                                                                                                            "max":  37
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "villeneuve",
                                          "name":  "Circuit Gilles-Villeneuve",
                                          "grandPrix":  "Canadian Grand Prix",
                                          "country":  "Canada",
                                          "eventFormat":  "standard",
                                          "hasSprint":  false,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  4.361,
                                                           "raceLaps":  70,
                                                           "raceDistanceKm":  305.27,
                                                           "firstGrandPrix":  1978,
                                                           "weekendTyres":  {
                                                                                "hard":  "C3",
                                                                                "medium":  "C4",
                                                                                "soft":  "C5"
                                                                            },
                                                           "tyreAllocationStatus":  "official-2026",
                                                           "coordinates":  [
                                                                               45.5,
                                                                               -73.5228
                                                                           ],
                                                           "turns":  14,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "traction-braking",
                                                                 "tyreSeverity":  2,
                                                                 "lateralLoad":  2,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  2,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  2,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  19,
                                                                 "safetyCarProbability":  0.31,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "villeneuve-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  22,
                                                                                                            "max":  28
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "villeneuve-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  40,
                                                                                                            "max":  46
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "villeneuve-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C5",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  17,
                                                                                                            "max":  22
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "pitWindow":  {
                                                                                                            "min":  39,
                                                                                                            "max":  45
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "monaco",
                                          "name":  "Circuit de Monaco",
                                          "grandPrix":  "Monaco Grand Prix",
                                          "country":  "Monaco",
                                          "eventFormat":  "standard",
                                          "hasSprint":  false,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  3.337,
                                                           "raceLaps":  78,
                                                           "raceDistanceKm":  260.286,
                                                           "firstGrandPrix":  1950,
                                                           "weekendTyres":  {
                                                                                "hard":  "C3",
                                                                                "medium":  "C4",
                                                                                "soft":  "C5"
                                                                            },
                                                           "tyreAllocationStatus":  "official-2026",
                                                           "coordinates":  [
                                                                               43.7347,
                                                                               7.4206
                                                                           ],
                                                           "turns":  19,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "low-speed-street",
                                                                 "tyreSeverity":  2,
                                                                 "lateralLoad":  2,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  2,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  2,
                                                                 "overtakingDifficulty":  5,
                                                                 "estimatedGreenFlagPitLossSeconds":  19.5,
                                                                 "safetyCarProbability":  0.48,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "monaco-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  25,
                                                                                                            "max":  31
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "monaco-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  45,
                                                                                                            "max":  51
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "monaco-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C5",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  20,
                                                                                                            "max":  25
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "pitWindow":  {
                                                                                                            "min":  44,
                                                                                                            "max":  50
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "catalunya",
                                          "name":  "Circuit de Barcelona-Catalunya",
                                          "grandPrix":  "Barcelona-Catalunya Grand Prix",
                                          "country":  "Spain",
                                          "eventFormat":  "standard",
                                          "hasSprint":  true,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  4.657,
                                                           "raceLaps":  66,
                                                           "raceDistanceKm":  307.362,
                                                           "firstGrandPrix":  1991,
                                                           "weekendTyres":  {
                                                                                "hard":  "C1",
                                                                                "medium":  "C2",
                                                                                "soft":  "C3"
                                                                            },
                                                           "tyreAllocationStatus":  "official-2026",
                                                           "coordinates":  [
                                                                               41.57,
                                                                               2.2611
                                                                           ],
                                                           "turns":  14,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "high-speed-mixed",
                                                                 "tyreSeverity":  5,
                                                                 "lateralLoad":  5,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  5,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  2,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  22.5,
                                                                 "safetyCarProbability":  0.31,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "catalunya-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  17,
                                                                                                            "max":  23
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C1",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "catalunya-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C1",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  38,
                                                                                                            "max":  44
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "catalunya-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  12,
                                                                                                            "max":  17
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C1",
                                                                                          "pitWindow":  {
                                                                                                            "min":  37,
                                                                                                            "max":  43
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "red-bull-ring",
                                          "name":  "Red Bull Ring",
                                          "grandPrix":  "Austrian Grand Prix",
                                          "country":  "Austria",
                                          "eventFormat":  "standard",
                                          "hasSprint":  false,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  4.318,
                                                           "raceLaps":  71,
                                                           "raceDistanceKm":  306.578,
                                                           "firstGrandPrix":  1970,
                                                           "weekendTyres":  {
                                                                                "hard":  "C3",
                                                                                "medium":  "C4",
                                                                                "soft":  "C5"
                                                                            },
                                                           "tyreAllocationStatus":  "official-2026",
                                                           "coordinates":  [
                                                                               47.2197,
                                                                               14.7647
                                                                           ],
                                                           "turns":  10,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "traction-high-speed",
                                                                 "tyreSeverity":  3,
                                                                 "lateralLoad":  3,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  3,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  2,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  20,
                                                                 "safetyCarProbability":  0.31,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "red-bull-ring-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  21,
                                                                                                            "max":  27
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "red-bull-ring-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  41,
                                                                                                            "max":  47
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "red-bull-ring-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C5",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  16,
                                                                                                            "max":  21
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "pitWindow":  {
                                                                                                            "min":  40,
                                                                                                            "max":  46
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "silverstone",
                                          "name":  "Silverstone Circuit",
                                          "grandPrix":  "British Grand Prix",
                                          "country":  "United Kingdom",
                                          "eventFormat":  "standard",
                                          "hasSprint":  true,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  5.891,
                                                           "raceLaps":  52,
                                                           "raceDistanceKm":  306.332,
                                                           "firstGrandPrix":  1950,
                                                           "weekendTyres":  {
                                                                                "hard":  "C1",
                                                                                "medium":  "C2",
                                                                                "soft":  "C3"
                                                                            },
                                                           "tyreAllocationStatus":  "official-2026",
                                                           "coordinates":  [
                                                                               52.0786,
                                                                               -1.0169
                                                                           ],
                                                           "turns":  18,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "high-speed",
                                                                 "tyreSeverity":  5,
                                                                 "lateralLoad":  5,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  5,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  5,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  23.5,
                                                                 "safetyCarProbability":  0.31,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "silverstone-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  13,
                                                                                                            "max":  19
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C1",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "silverstone-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C1",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  29,
                                                                                                            "max":  35
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "silverstone-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  8,
                                                                                                            "max":  13
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C1",
                                                                                          "pitWindow":  {
                                                                                                            "min":  28,
                                                                                                            "max":  34
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "spa-francorchamps",
                                          "name":  "Circuit de Spa-Francorchamps",
                                          "grandPrix":  "Belgian Grand Prix",
                                          "country":  "Belgium",
                                          "eventFormat":  "standard",
                                          "hasSprint":  false,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  7.004,
                                                           "raceLaps":  44,
                                                           "raceDistanceKm":  308.176,
                                                           "firstGrandPrix":  1950,
                                                           "weekendTyres":  {
                                                                                "hard":  "C2",
                                                                                "medium":  "C3",
                                                                                "soft":  "C4"
                                                                            },
                                                           "tyreAllocationStatus":  "official-2026",
                                                           "coordinates":  [
                                                                               50.4372,
                                                                               5.9714
                                                                           ],
                                                           "turns":  19,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "high-speed-mixed",
                                                                 "tyreSeverity":  4,
                                                                 "lateralLoad":  4,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  4,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  5,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  22.5,
                                                                 "safetyCarProbability":  0.31,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "spa-francorchamps-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  11,
                                                                                                            "max":  17
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "spa-francorchamps-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  24,
                                                                                                            "max":  30
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "spa-francorchamps-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  7,
                                                                                                            "max":  11
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "pitWindow":  {
                                                                                                            "min":  23,
                                                                                                            "max":  29
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "hungaroring",
                                          "name":  "Hungaroring",
                                          "grandPrix":  "Hungarian Grand Prix",
                                          "country":  "Hungary",
                                          "eventFormat":  "standard",
                                          "hasSprint":  false,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  4.381,
                                                           "raceLaps":  70,
                                                           "raceDistanceKm":  306.67,
                                                           "firstGrandPrix":  1986,
                                                           "weekendTyres":  {
                                                                                "hard":  "C2",
                                                                                "medium":  "C3",
                                                                                "soft":  "C4"
                                                                            },
                                                           "tyreAllocationStatus":  "official-2026",
                                                           "coordinates":  [
                                                                               47.5789,
                                                                               19.2486
                                                                           ],
                                                           "turns":  14,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "technical",
                                                                 "tyreSeverity":  4,
                                                                 "lateralLoad":  4,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  4,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  2,
                                                                 "overtakingDifficulty":  5,
                                                                 "estimatedGreenFlagPitLossSeconds":  21,
                                                                 "safetyCarProbability":  0.31,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "hungaroring-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  20,
                                                                                                            "max":  26
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "hungaroring-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  40,
                                                                                                            "max":  46
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "hungaroring-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  15,
                                                                                                            "max":  20
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "pitWindow":  {
                                                                                                            "min":  39,
                                                                                                            "max":  45
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "zandvoort",
                                          "name":  "Circuit Zandvoort",
                                          "grandPrix":  "Dutch Grand Prix",
                                          "country":  "Netherlands",
                                          "eventFormat":  "standard",
                                          "hasSprint":  true,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  4.259,
                                                           "raceLaps":  72,
                                                           "raceDistanceKm":  306.648,
                                                           "firstGrandPrix":  1952,
                                                           "weekendTyres":  {
                                                                                "hard":  "C1",
                                                                                "medium":  "C2",
                                                                                "soft":  "C3"
                                                                            },
                                                           "tyreAllocationStatus":  "model-until-pirelli-announcement",
                                                           "coordinates":  [
                                                                               52.3888,
                                                                               4.5409
                                                                           ],
                                                           "turns":  14,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "high-speed-technical",
                                                                 "tyreSeverity":  4,
                                                                 "lateralLoad":  4,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  4,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  2,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  20.5,
                                                                 "safetyCarProbability":  0.31,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "zandvoort-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  20,
                                                                                                            "max":  26
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C1",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "zandvoort-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C1",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  42,
                                                                                                            "max":  48
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "zandvoort-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  15,
                                                                                                            "max":  20
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C1",
                                                                                          "pitWindow":  {
                                                                                                            "min":  41,
                                                                                                            "max":  47
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "monza",
                                          "name":  "Autodromo Nazionale Monza",
                                          "grandPrix":  "Italian Grand Prix",
                                          "country":  "Italy",
                                          "eventFormat":  "standard",
                                          "hasSprint":  false,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  5.793,
                                                           "raceLaps":  53,
                                                           "raceDistanceKm":  307.029,
                                                           "firstGrandPrix":  1950,
                                                           "weekendTyres":  {
                                                                                "hard":  "C3",
                                                                                "medium":  "C4",
                                                                                "soft":  "C5"
                                                                            },
                                                           "tyreAllocationStatus":  "model-until-pirelli-announcement",
                                                           "coordinates":  [
                                                                               45.6156,
                                                                               9.2811
                                                                           ],
                                                           "turns":  11,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "low-downforce",
                                                                 "tyreSeverity":  2,
                                                                 "lateralLoad":  2,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  2,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  2,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  24,
                                                                 "safetyCarProbability":  0.31,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "monza-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  16,
                                                                                                            "max":  22
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "monza-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  30,
                                                                                                            "max":  36
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "monza-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C5",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  11,
                                                                                                            "max":  16
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "pitWindow":  {
                                                                                                            "min":  29,
                                                                                                            "max":  35
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "madring",
                                          "name":  "Madring",
                                          "grandPrix":  "Spanish Grand Prix",
                                          "country":  "Spain",
                                          "eventFormat":  "standard",
                                          "hasSprint":  false,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  true,
                                          "official":  {
                                                           "lengthKm":  5.474,
                                                           "raceLaps":  57,
                                                           "raceDistanceKm":  312.018,
                                                           "firstGrandPrix":  2026,
                                                           "weekendTyres":  {
                                                                                "hard":  "C2",
                                                                                "medium":  "C3",
                                                                                "soft":  "C4"
                                                                            },
                                                           "tyreAllocationStatus":  "model-until-pirelli-announcement",
                                                           "coordinates":  [
                                                                               40.463,
                                                                               -3.617
                                                                           ],
                                                           "turns":  22,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "street-mixed",
                                                                 "tyreSeverity":  3,
                                                                 "lateralLoad":  3,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  3,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  2,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  22,
                                                                 "safetyCarProbability":  0.48,
                                                                 "confidence":  "low",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "madring-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  16,
                                                                                                            "max":  22
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "madring-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  32,
                                                                                                            "max":  38
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "madring-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  11,
                                                                                                            "max":  16
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "pitWindow":  {
                                                                                                            "min":  31,
                                                                                                            "max":  37
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "baku",
                                          "name":  "Baku City Circuit",
                                          "grandPrix":  "Azerbaijan Grand Prix",
                                          "country":  "Azerbaijan",
                                          "eventFormat":  "standard",
                                          "hasSprint":  false,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  6.003,
                                                           "raceLaps":  51,
                                                           "raceDistanceKm":  306.153,
                                                           "firstGrandPrix":  2016,
                                                           "weekendTyres":  {
                                                                                "hard":  "C3",
                                                                                "medium":  "C4",
                                                                                "soft":  "C5"
                                                                            },
                                                           "tyreAllocationStatus":  "model-until-pirelli-announcement",
                                                           "coordinates":  [
                                                                               40.3725,
                                                                               49.8533
                                                                           ],
                                                           "turns":  20,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "street-low-downforce",
                                                                 "tyreSeverity":  2,
                                                                 "lateralLoad":  2,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  2,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  2,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  21,
                                                                 "safetyCarProbability":  0.48,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "baku-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  15,
                                                                                                            "max":  21
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "baku-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  29,
                                                                                                            "max":  35
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "baku-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C5",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  10,
                                                                                                            "max":  15
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "pitWindow":  {
                                                                                                            "min":  28,
                                                                                                            "max":  34
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "marina-bay",
                                          "name":  "Marina Bay Street Circuit",
                                          "grandPrix":  "Singapore Grand Prix",
                                          "country":  "Singapore",
                                          "eventFormat":  "standard",
                                          "hasSprint":  true,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  4.928,
                                                           "raceLaps":  62,
                                                           "raceDistanceKm":  305.536,
                                                           "firstGrandPrix":  2008,
                                                           "weekendTyres":  {
                                                                                "hard":  "C3",
                                                                                "medium":  "C4",
                                                                                "soft":  "C5"
                                                                            },
                                                           "tyreAllocationStatus":  "model-until-pirelli-announcement",
                                                           "coordinates":  [
                                                                               1.2914,
                                                                               103.864
                                                                           ],
                                                           "turns":  19,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "low-speed-street",
                                                                 "tyreSeverity":  3,
                                                                 "lateralLoad":  3,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  3,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  2,
                                                                 "overtakingDifficulty":  5,
                                                                 "estimatedGreenFlagPitLossSeconds":  28,
                                                                 "safetyCarProbability":  0.48,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "marina-bay-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  18,
                                                                                                            "max":  24
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "marina-bay-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  35,
                                                                                                            "max":  41
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "marina-bay-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C5",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  13,
                                                                                                            "max":  18
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "pitWindow":  {
                                                                                                            "min":  34,
                                                                                                            "max":  40
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "americas",
                                          "name":  "Circuit of the Americas",
                                          "grandPrix":  "United States Grand Prix",
                                          "country":  "United States",
                                          "eventFormat":  "standard",
                                          "hasSprint":  false,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  5.514,
                                                           "raceLaps":  56,
                                                           "raceDistanceKm":  308.784,
                                                           "firstGrandPrix":  2012,
                                                           "weekendTyres":  {
                                                                                "hard":  "C2",
                                                                                "medium":  "C3",
                                                                                "soft":  "C4"
                                                                            },
                                                           "tyreAllocationStatus":  "model-until-pirelli-announcement",
                                                           "coordinates":  [
                                                                               30.1328,
                                                                               -97.6411
                                                                           ],
                                                           "turns":  20,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "high-speed-mixed",
                                                                 "tyreSeverity":  4,
                                                                 "lateralLoad":  4,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  4,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  2,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  20.5,
                                                                 "safetyCarProbability":  0.31,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "americas-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  15,
                                                                                                            "max":  21
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "americas-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  32,
                                                                                                            "max":  38
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "americas-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  10,
                                                                                                            "max":  15
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "pitWindow":  {
                                                                                                            "min":  31,
                                                                                                            "max":  37
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "rodriguez",
                                          "name":  "Autodromo Hermanos Rodriguez",
                                          "grandPrix":  "Mexico City Grand Prix",
                                          "country":  "Mexico",
                                          "eventFormat":  "standard",
                                          "hasSprint":  false,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  4.304,
                                                           "raceLaps":  71,
                                                           "raceDistanceKm":  305.584,
                                                           "firstGrandPrix":  1963,
                                                           "weekendTyres":  {
                                                                                "hard":  "C2",
                                                                                "medium":  "C3",
                                                                                "soft":  "C4"
                                                                            },
                                                           "tyreAllocationStatus":  "model-until-pirelli-announcement",
                                                           "coordinates":  [
                                                                               19.4042,
                                                                               -99.0907
                                                                           ],
                                                           "turns":  17,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "low-downforce",
                                                                 "tyreSeverity":  3,
                                                                 "lateralLoad":  3,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  3,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  2,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  21,
                                                                 "safetyCarProbability":  0.31,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "rodriguez-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  21,
                                                                                                            "max":  27
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "rodriguez-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  41,
                                                                                                            "max":  47
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "rodriguez-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  16,
                                                                                                            "max":  21
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "pitWindow":  {
                                                                                                            "min":  40,
                                                                                                            "max":  46
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "interlagos",
                                          "name":  "Autodromo Jose Carlos Pace",
                                          "grandPrix":  "Sao Paulo Grand Prix",
                                          "country":  "Brazil",
                                          "eventFormat":  "standard",
                                          "hasSprint":  false,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  4.309,
                                                           "raceLaps":  71,
                                                           "raceDistanceKm":  305.939,
                                                           "firstGrandPrix":  1973,
                                                           "weekendTyres":  {
                                                                                "hard":  "C2",
                                                                                "medium":  "C3",
                                                                                "soft":  "C4"
                                                                            },
                                                           "tyreAllocationStatus":  "model-until-pirelli-announcement",
                                                           "coordinates":  [
                                                                               -23.7036,
                                                                               -46.6997
                                                                           ],
                                                           "turns":  15,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "undulating-mixed",
                                                                 "tyreSeverity":  3,
                                                                 "lateralLoad":  3,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  3,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  5,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  22,
                                                                 "safetyCarProbability":  0.31,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "interlagos-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  21,
                                                                                                            "max":  27
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "interlagos-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  41,
                                                                                                            "max":  47
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "interlagos-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  16,
                                                                                                            "max":  21
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "pitWindow":  {
                                                                                                            "min":  40,
                                                                                                            "max":  46
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "las-vegas",
                                          "name":  "Las Vegas Strip Circuit",
                                          "grandPrix":  "Las Vegas Grand Prix",
                                          "country":  "United States",
                                          "eventFormat":  "standard",
                                          "hasSprint":  false,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  6.201,
                                                           "raceLaps":  50,
                                                           "raceDistanceKm":  310.05,
                                                           "firstGrandPrix":  2023,
                                                           "weekendTyres":  {
                                                                                "hard":  "C3",
                                                                                "medium":  "C4",
                                                                                "soft":  "C5"
                                                                            },
                                                           "tyreAllocationStatus":  "model-until-pirelli-announcement",
                                                           "coordinates":  [
                                                                               36.1147,
                                                                               -115.1728
                                                                           ],
                                                           "turns":  17,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "street-low-downforce",
                                                                 "tyreSeverity":  2,
                                                                 "lateralLoad":  2,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  2,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  2,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  20.5,
                                                                 "safetyCarProbability":  0.48,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "las-vegas-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  15,
                                                                                                            "max":  21
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "las-vegas-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  28,
                                                                                                            "max":  34
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "las-vegas-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C5",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  10,
                                                                                                            "max":  15
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "pitWindow":  {
                                                                                                            "min":  27,
                                                                                                            "max":  33
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "losail",
                                          "name":  "Lusail International Circuit",
                                          "grandPrix":  "Qatar Grand Prix",
                                          "country":  "Qatar",
                                          "eventFormat":  "standard",
                                          "hasSprint":  false,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  5.38,
                                                           "raceLaps":  57,
                                                           "raceDistanceKm":  306.66,
                                                           "firstGrandPrix":  2021,
                                                           "weekendTyres":  {
                                                                                "hard":  "C1",
                                                                                "medium":  "C2",
                                                                                "soft":  "C3"
                                                                            },
                                                           "tyreAllocationStatus":  "model-until-pirelli-announcement",
                                                           "coordinates":  [
                                                                               25.49,
                                                                               51.4542
                                                                           ],
                                                           "turns":  16,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "high-speed",
                                                                 "tyreSeverity":  5,
                                                                 "lateralLoad":  5,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  5,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  2,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  25,
                                                                 "safetyCarProbability":  0.31,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "losail-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  14,
                                                                                                            "max":  20
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C1",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "losail-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C1",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  32,
                                                                                                            "max":  38
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "losail-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  9,
                                                                                                            "max":  14
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C1",
                                                                                          "pitWindow":  {
                                                                                                            "min":  31,
                                                                                                            "max":  37
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C2",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      },
                                      {
                                          "id":  "yas-marina",
                                          "name":  "Yas Marina Circuit",
                                          "grandPrix":  "Abu Dhabi Grand Prix",
                                          "country":  "United Arab Emirates",
                                          "eventFormat":  "standard",
                                          "hasSprint":  false,
                                          "calendarStatus":  "scheduled",
                                          "isNewCircuit":  false,
                                          "official":  {
                                                           "lengthKm":  5.281,
                                                           "raceLaps":  58,
                                                           "raceDistanceKm":  306.298,
                                                           "firstGrandPrix":  2009,
                                                           "weekendTyres":  {
                                                                                "hard":  "C3",
                                                                                "medium":  "C4",
                                                                                "soft":  "C5"
                                                                            },
                                                           "tyreAllocationStatus":  "model-until-pirelli-announcement",
                                                           "coordinates":  [
                                                                               24.4672,
                                                                               54.6031
                                                                           ],
                                                           "turns":  16,
                                                           "sourceRefs":  [
                                                                              "fia-2026-calendar",
                                                                              "formula1-circuit-guide",
                                                                              "pirelli-2026-compounds"
                                                                          ]
                                                       },
                                          "trackModelSeed":  {
                                                                 "speedProfile":  "traction-mixed",
                                                                 "tyreSeverity":  3,
                                                                 "lateralLoad":  3,
                                                                 "longitudinalLoad":  3,
                                                                 "abrasiveness":  3,
                                                                 "frontRearLimitation":  "balanced",
                                                                 "criticalTyre":  "track-condition-dependent",
                                                                 "trackEvolution":  3,
                                                                 "windSensitivity":  3,
                                                                 "rainVariability":  2,
                                                                 "overtakingDifficulty":  3,
                                                                 "estimatedGreenFlagPitLossSeconds":  22,
                                                                 "safetyCarProbability":  0.31,
                                                                 "confidence":  "medium",
                                                                 "calibrationRequired":  true
                                                             },
                                          "weatherInputsRecommended":  [
                                                                           "airTemperatureC",
                                                                           "trackTemperatureC",
                                                                           "humidityPct",
                                                                           "windSpeedKph",
                                                                           "rainProbabilityPct",
                                                                           "rainIntensityMmPerHour",
                                                                           "trackWetnessPct"
                                                                       ],
                                          "dryStrategySeeds":  [
                                                                   {
                                                                       "id":  "yas-marina-normal",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  17,
                                                                                                            "max":  23
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "low"
                                                                   },
                                                                   {
                                                                       "id":  "yas-marina-overcut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  33,
                                                                                                            "max":  39
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "medium"
                                                                   },
                                                                   {
                                                                       "id":  "yas-marina-undercut",
                                                                       "stints":  [
                                                                                      {
                                                                                          "compound":  "C5",
                                                                                          "lapStart":  1,
                                                                                          "pitWindow":  {
                                                                                                            "min":  12,
                                                                                                            "max":  17
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C3",
                                                                                          "pitWindow":  {
                                                                                                            "min":  32,
                                                                                                            "max":  38
                                                                                                        }
                                                                                      },
                                                                                      {
                                                                                          "compound":  "C4",
                                                                                          "toRaceEnd":  true
                                                                                      }
                                                                                  ],
                                                                       "risk":  "high"
                                                                   }
                                                               ]
                                      }
                                  ],
                     "warning":  "2026 Pirelli nominations marked official-2026 are official; later rounds stay model projections until Pirelli publishes their selections. Pit loss and strategy windows are model estimates."
                 },
    "tyres":  {
                  "id":  "pirelli-2026",
                  "season":  2026,
                  "officialRange":  {
                                        "slicks":  [
                                                       "C1",
                                                       "C2",
                                                       "C3",
                                                       "C4",
                                                       "C5"
                                                   ],
                                        "wetWeather":  [
                                                           "INTERMEDIATE",
                                                           "WET"
                                                       ],
                                        "hardest":  "C1",
                                        "softest":  "C5",
                                        "rimDiameterInches":  18,
                                        "sourceRefs":  [
                                                           "pirelli-2026-range"
                                                       ]
                                    },
                  "compounds":  [
                                    {
                                        "id":  "C1",
                                        "type":  "slick",
                                        "hardnessRank":  1,
                                        "genericModelSeed":  {
                                                                 "relativePaceDeltaToC5SecondsPerLap":  1.2,
                                                                 "baseDegradationSecondsPerLap":  0.035,
                                                                 "warmupDifficulty":  0.85,
                                                                 "temperatureWindowC":  {
                                                                                            "min":  95,
                                                                                            "max":  120
                                                                                        }
                                                             }
                                    },
                                    {
                                        "id":  "C2",
                                        "type":  "slick",
                                        "hardnessRank":  2,
                                        "genericModelSeed":  {
                                                                 "relativePaceDeltaToC5SecondsPerLap":  0.85,
                                                                 "baseDegradationSecondsPerLap":  0.05,
                                                                 "warmupDifficulty":  0.7,
                                                                 "temperatureWindowC":  {
                                                                                            "min":  90,
                                                                                            "max":  115
                                                                                        }
                                                             }
                                    },
                                    {
                                        "id":  "C3",
                                        "type":  "slick",
                                        "hardnessRank":  3,
                                        "genericModelSeed":  {
                                                                 "relativePaceDeltaToC5SecondsPerLap":  0.55,
                                                                 "baseDegradationSecondsPerLap":  0.07,
                                                                 "warmupDifficulty":  0.55,
                                                                 "temperatureWindowC":  {
                                                                                            "min":  85,
                                                                                            "max":  110
                                                                                        }
                                                             }
                                    },
                                    {
                                        "id":  "C4",
                                        "type":  "slick",
                                        "hardnessRank":  4,
                                        "genericModelSeed":  {
                                                                 "relativePaceDeltaToC5SecondsPerLap":  0.28,
                                                                 "baseDegradationSecondsPerLap":  0.1,
                                                                 "warmupDifficulty":  0.38,
                                                                 "temperatureWindowC":  {
                                                                                            "min":  80,
                                                                                            "max":  105
                                                                                        }
                                                             }
                                    },
                                    {
                                        "id":  "C5",
                                        "type":  "slick",
                                        "hardnessRank":  5,
                                        "genericModelSeed":  {
                                                                 "relativePaceDeltaToC5SecondsPerLap":  0.0,
                                                                 "baseDegradationSecondsPerLap":  0.14,
                                                                 "warmupDifficulty":  0.2,
                                                                 "temperatureWindowC":  {
                                                                                            "min":  75,
                                                                                            "max":  100
                                                                                        }
                                                             }
                                    },
                                    {
                                        "id":  "INTERMEDIATE",
                                        "type":  "wet",
                                        "genericModelSeed":  {
                                                                 "optimalTrackWetnessPct":  {
                                                                                                "min":  15,
                                                                                                "max":  65
                                                                                            },
                                                                 "standingWaterTolerance":  "medium"
                                                             }
                                    },
                                    {
                                        "id":  "WET",
                                        "type":  "wet",
                                        "genericModelSeed":  {
                                                                 "optimalTrackWetnessPct":  {
                                                                                                "min":  55,
                                                                                                "max":  100
                                                                                            },
                                                                 "standingWaterTolerance":  "high"
                                                             }
                                    }
                                ],
                  "warning":  "All pace, degradation and temperature-window values are generic model seeds, not official Pirelli performance data. Calibrate them with practice and race telemetry."
              },
    "regulations":  {
                        "id":  "fia-2026-sporting-issue-07",
                        "season":  2026,
                        "document":  {
                                         "section":  "B",
                                         "title":  "Sporting Regulations",
                                         "issue":  "07",
                                         "date":  "2026-06-25",
                                         "status":  "published",
                                         "sourceRefs":  [
                                                            "fia-sporting-2026-issue-07"
                                                        ]
                                     },
                        "tyreRulesImplemented":  [
                                                     {
                                                         "id":  "B6.1.1",
                                                         "rule":  "At each competition the supplier provides three dry-weather specifications, one Intermediate specification and one Wet specification.",
                                                         "validatorKey":  "eventProvidesThreeDryOneIntermediateOneWet"
                                                     },
                                                     {
                                                         "id":  "B6.3.4",
                                                         "rule":  "Standard-format events allow 13 dry sets per driver; alternative/Sprint format allows 12 dry sets. The normal allocation includes five Intermediate sets and two Wet sets, subject to the regulation\u0027s exceptions.",
                                                         "validatorKey":  "allocationByEventFormat"
                                                     },
                                                     {
                                                         "id":  "B6.3.6",
                                                         "rule":  "Unless Intermediate or Wet tyres were used in the race, each driver must use at least two different dry specifications, including at least one mandatory dry-weather race specification.",
                                                         "validatorKey":  "twoDrySpecificationsUnlessWetUsed",
                                                         "failureOutcome":  "disqualification unless the suspended-race exception applies"
                                                     },
                                                     {
                                                         "id":  "B6.3.7",
                                                         "rule":  "When the formation lap starts behind the Safety Car, Wet tyres are compulsory until the Safety Car\u0027s orange lights are extinguished and it returns to the pit lane.",
                                                         "validatorKey":  "wetCompulsoryForSafetyCarStart"
                                                     },
                                                     {
                                                         "id":  "B6.3.9",
                                                         "rule":  "At an alternative-format event, SQ1 and SQ2 use a new set of the Medium specification; SQ3 uses the Soft specification.",
                                                         "validatorKey":  "sprintQualifyingCompoundRestrictions"
                                                     }
                                                 ],
                        "validatorDefaults":  {
                                                  "dryRace":  {
                                                                  "minimumDistinctDrySpecifications":  2,
                                                                  "mustIncludeMandatoryRaceSpecification":  true,
                                                                  "wetWeatherException":  true
                                                              },
                                                  "allocations":  {
                                                                      "standard":  {
                                                                                       "drySets":  13,
                                                                                       "intermediateSets":  5,
                                                                                       "wetSets":  2
                                                                                   },
                                                                      "alternative":  {
                                                                                          "drySets":  12,
                                                                                          "intermediateSets":  5,
                                                                                          "wetSets":  2
                                                                                      }
                                                                  }
                                              }
                    },
    "modelConfig":  {
                        "id":  "strategy-model-v0.1",
                        "status":  "prototype",
                        "purpose":  "Generate ranked tyre-strategy recommendations while keeping official facts separate from estimates.",
                        "coreEquations":  {
                                              "effectiveDegradationSecondsPerLap":  "baseTyreDeg * circuitSeverityFactor * teamTyreDegMultiplier * driverTyreManagementMultiplier * temperatureFactor * trafficFactor * tyreAgeFactor",
                                              "lapTimeSeconds":  "cleanAirBaseline + compoundPaceDelta + fuelEffect + degradation + trafficLoss + weatherLoss",
                                              "strategyTotalSeconds":  "sum(projectedLapTimes) + sum(pitLosses) + riskPenalty",
                                              "confidence":  "dataCompleteness * modelCalibrationQuality * weatherCertainty * strategySeparation"
                                          },
                        "weights":  {
                                        "expectedRaceTime":  0.72,
                                        "risk":  0.18,
                                        "trackPosition":  0.1
                                    },
                        "conditionFactors":  {
                                                 "trackTemperature":  {
                                                                          "coldThresholdC":  20,
                                                                          "hotThresholdC":  42,
                                                                          "coldHardTyreWarmupPenalty":  1.15,
                                                                          "hotSoftTyreDegradationPenalty":  1.2
                                                                      },
                                                 "traffic":  {
                                                                 "cleanAir":  1.0,
                                                                 "light":  1.05,
                                                                 "medium":  1.12,
                                                                 "heavy":  1.22
                                                             },
                                                 "trackState":  {
                                                                    "dry":  1.0,
                                                                    "damp":  1.35,
                                                                    "wet":  1.8,
                                                                    "standing-water":  2.4
                                                                }
                                             },
                        "strategyGeneration":  {
                                                   "maximumStops":  3,
                                                   "pitWindowWidthLaps":  6,
                                                   "returnTopPlans":  3,
                                                   "planLabels":  [
                                                                      "FASTEST_EXPECTED",
                                                                      "LOWER_RISK",
                                                                      "AGGRESSIVE_ALTERNATIVE"
                                                                  ],
                                                   "discardIllegalStrategies":  true,
                                                   "discardUnavailableTyreSets":  true,
                                                   "discardStintsBeyondEstimatedTyreLife":  true
                                               },
                        "importantWarning":  "The model seeds are deliberately conservative placeholders. Replace them with practice long-run data, race timing, actual tyre-set availability and weather forecasts before presenting recommendations as high confidence."
                    }
};