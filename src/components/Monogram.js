import React from 'react';

const Monogram = ({ className, color, highlight }) => (
  <svg className={className} fill={color || "white"} width="60" height="60" viewBox="0 0 16000 16000">
    <defs>
      <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#64bbe8"/>
        <stop offset="80%" stopColor="#c5aed3"/>
      </linearGradient>
      <clipPath id="monogram-clip">
        <path d="M7715 15614 c-66 -8 -165 -21 -220 -29 -55 -8 -113 -15 -129 -15 -16 0 -70 -7 -120 -16 -173 -29 -261 -44 -336 -55 -41 -6 -109 -17 -150 -25 -227 -44 -256 -49 -428 -89 -127 -30 -196 -48 -332 -88 -38 -11 -247 -90 -295 -111 -16 -8 -68 -28 -115 -46 -47 -17 -94 -35 -105 -40 -11 -4 -60 -25 -110 -45 -82 -34 -146 -62 -230 -100 -158 -71 -530 -264 -673 -348 -63 -37 -118 -67 -123 -67 -5 0 -9 -3 -9 -8 0 -4 -17 -16 -37 -27 -21 -11 -56 -32 -78 -46 -22 -14 -67 -43 -100 -65 -33 -21 -62 -42 -63 -46 -2 -5 -8 -8 -13 -8 -9 0 -94 -56 -117 -78 -7 -6 -23 -17 -34 -23 -30 -16 -251 -180 -264 -196 -6 -7 -16 -13 -22 -13 -6 0 -12 -3 -14 -7 -1 -5 -25 -26 -53 -48 -27 -21 -52 -42 -55 -45 -3 -3 -39 -32 -80 -65 -41 -33 -82 -66 -90 -75 -9 -8 -49 -44 -90 -79 -135 -117 -440 -417 -575 -566 -44 -49 -90 -99 -102 -112 -11 -13 -35 -41 -52 -62 -51 -62 -95 -114 -113 -133 -10 -10 -18 -22 -18 -28 0 -5 -4 -10 -9 -10 -5 0 -26 -25 -46 -55 -21 -30 -42 -55 -47 -55 -4 0 -8 -7 -8 -15 0 -8 -4 -15 -9 -15 -5 0 -22 -20 -38 -45 -15 -25 -31 -45 -35 -45 -5 0 -8 -7 -8 -15 0 -8 -4 -15 -8 -15 -10 0 -72 -87 -72 -100 0 -6 -4 -10 -8 -10 -6 0 -71 -89 -107 -149 -5 -9 -12 -18 -15 -21 -15 -15 -50 -71 -50 -80 0 -5 -3 -10 -7 -10 -5 0 -17 -18 -27 -40 -11 -22 -22 -40 -26 -40 -4 0 -13 -13 -20 -30 -7 -16 -16 -30 -21 -30 -5 0 -9 -5 -9 -10 0 -6 -12 -29 -27 -53 -38 -58 -49 -76 -73 -122 -11 -22 -29 -53 -40 -70 -11 -16 -25 -41 -30 -55 -6 -13 -15 -27 -19 -30 -6 -4 -247 -487 -286 -575 -8 -16 -26 -57 -40 -90 -15 -33 -39 -87 -55 -120 -85 -184 -195 -489 -244 -675 -9 -36 -23 -87 -31 -115 -15 -56 -42 -162 -55 -215 -5 -19 -15 -62 -23 -95 -8 -33 -21 -82 -27 -110 -7 -27 -16 -68 -20 -90 -4 -22 -12 -58 -18 -80 -20 -76 -54 -261 -86 -465 -44 -282 -62 -766 -47 -1280 16 -575 29 -749 77 -1025 19 -113 58 -295 90 -420 27 -104 42 -168 54 -220 6 -27 18 -74 26 -102 48 -174 71 -253 89 -303 7 -19 18 -51 24 -70 7 -19 16 -48 21 -65 11 -40 31 -96 41 -117 5 -10 9 -26 9 -36 0 -10 7 -27 15 -38 8 -10 15 -27 15 -36 0 -9 6 -29 14 -45 8 -15 22 -48 31 -73 9 -25 23 -58 30 -75 7 -16 34 -82 60 -145 26 -63 57 -135 67 -160 22 -50 263 -533 282 -565 6 -11 29 -51 50 -90 22 -38 59 -100 83 -137 24 -37 43 -72 43 -77 0 -6 4 -11 9 -11 5 0 13 -9 16 -20 3 -11 12 -26 18 -32 19 -21 67 -97 67 -107 0 -5 3 -11 8 -13 8 -4 52 -65 52 -73 0 -6 13 -23 43 -56 9 -10 17 -21 17 -24 0 -8 229 -317 244 -330 6 -5 31 -37 55 -70 24 -33 51 -67 60 -76 9 -9 34 -37 56 -64 66 -80 109 -129 132 -152 13 -12 23 -24 23 -26 0 -15 489 -504 593 -592 93 -80 153 -132 169 -148 10 -9 22 -17 28 -17 5 0 10 -4 10 -8 0 -4 31 -33 70 -62 38 -30 70 -58 70 -62 0 -5 6 -8 14 -8 8 0 16 -3 18 -7 5 -13 96 -83 106 -83 6 0 12 -4 14 -9 2 -6 41 -37 88 -70 47 -33 92 -66 100 -73 9 -7 69 -49 135 -93 66 -44 122 -83 123 -87 2 -5 8 -8 13 -8 8 0 62 -32 194 -118 11 -6 27 -15 35 -19 8 -4 33 -18 55 -32 57 -37 76 -48 110 -65 17 -9 75 -40 130 -70 106 -57 337 -173 420 -212 157 -71 193 -87 220 -99 17 -7 46 -20 65 -28 33 -15 130 -52 213 -83 64 -24 121 -46 142 -55 28 -12 194 -69 230 -78 17 -5 41 -13 55 -18 14 -6 41 -15 60 -20 19 -6 60 -17 90 -26 30 -9 82 -23 115 -33 33 -9 80 -23 105 -30 109 -31 372 -93 480 -113 351 -65 588 -93 950 -112 423 -23 1021 -11 1306 27 61 7 126 14 145 14 19 0 70 6 114 14 44 8 125 22 180 31 214 36 368 68 520 110 28 7 79 21 115 30 110 28 174 47 208 61 18 8 40 14 49 14 23 0 210 62 291 96 18 8 39 14 46 14 8 0 27 7 42 15 16 8 37 15 46 15 9 0 19 4 22 9 3 4 26 14 51 21 25 7 48 17 51 21 3 5 14 9 25 9 10 0 27 4 37 9 27 13 83 37 132 56 25 10 74 31 110 47 36 17 79 36 95 43 184 81 600 291 700 356 17 10 37 22 45 26 16 8 159 91 188 108 62 38 362 235 377 248 6 4 46 34 90 65 105 75 244 180 275 210 14 12 40 32 58 43 17 11 32 25 32 30 0 5 4 9 10 9 5 0 24 15 43 32 18 18 66 62 107 98 95 83 479 467 590 590 47 51 97 107 113 122 15 16 27 30 27 33 0 2 18 23 41 47 22 23 57 64 77 91 20 26 40 47 44 47 4 0 8 7 8 15 0 8 4 15 9 15 5 0 26 25 46 55 21 30 42 55 47 55 4 0 8 4 8 10 0 5 7 18 15 27 29 33 196 271 240 341 6 9 15 22 22 29 6 7 15 22 18 33 3 11 10 20 15 20 4 0 10 8 14 18 6 19 19 40 53 89 13 17 23 34 23 37 0 3 13 25 30 49 16 25 30 49 30 55 0 6 4 12 9 14 8 3 140 230 217 373 92 170 264 526 264 544 0 6 4 19 9 29 5 9 16 35 24 57 8 22 21 58 30 80 37 99 47 155 47 257 0 102 -10 155 -46 235 -8 17 -14 33 -14 36 0 5 -20 30 -80 100 -42 48 -117 104 -185 139 -99 50 -111 56 -145 70 -19 9 -46 20 -60 26 -14 6 -52 21 -85 33 -33 11 -73 26 -90 34 -33 14 -59 24 -125 50 -43 16 -65 25 -145 60 -44 20 -95 42 -140 60 -19 8 -50 21 -67 29 -18 7 -64 26 -103 41 -38 15 -90 36 -115 47 -25 11 -56 24 -70 30 -14 6 -38 16 -55 23 -16 7 -50 21 -75 30 -25 10 -68 29 -97 42 -28 12 -56 23 -62 23 -6 0 -27 7 -48 16 -48 21 -93 41 -138 59 -19 8 -50 21 -67 29 -30 12 -165 67 -213 86 -94 37 -131 53 -140 61 -5 5 -15 9 -22 9 -7 0 -43 14 -80 31 -38 16 -81 36 -98 43 -16 7 -41 18 -55 25 -57 25 -170 64 -239 82 -104 27 -286 26 -364 0 -102 -35 -219 -140 -281 -252 -11 -18 -22 -36 -25 -39 -8 -7 -71 -137 -71 -147 0 -4 -13 -35 -29 -68 -25 -53 -49 -104 -89 -195 -6 -14 -30 -56 -52 -95 -23 -38 -48 -83 -56 -100 -29 -57 -95 -158 -106 -163 -5 -2 -8 -8 -8 -14 0 -6 -13 -27 -30 -48 -16 -21 -30 -42 -30 -48 0 -6 -3 -12 -7 -14 -5 -1 -26 -25 -48 -53 -22 -27 -43 -51 -47 -53 -5 -2 -8 -10 -8 -18 0 -8 -4 -14 -8 -14 -5 0 -22 -19 -39 -42 -17 -24 -59 -71 -92 -105 -34 -34 -61 -64 -61 -67 0 -7 -99 -106 -106 -106 -3 0 -36 -30 -73 -68 -37 -37 -95 -87 -127 -112 -32 -24 -63 -49 -69 -55 -5 -6 -50 -41 -100 -78 -49 -37 -94 -70 -100 -75 -30 -24 -185 -122 -194 -122 -5 0 -11 -4 -13 -8 -3 -8 -33 -26 -203 -120 -83 -46 -329 -162 -344 -162 -11 0 -20 -4 -79 -33 -19 -9 -40 -17 -48 -17 -8 0 -22 -4 -32 -10 -18 -11 -89 -36 -137 -50 -16 -4 -43 -13 -60 -18 -63 -21 -236 -66 -310 -81 -358 -72 -401 -76 -770 -76 -368 0 -370 0 -755 77 -51 10 -197 48 -265 68 -16 5 -52 16 -80 24 -27 8 -75 24 -105 36 -30 12 -66 25 -80 30 -122 42 -209 79 -375 162 -159 80 -189 96 -202 107 -7 6 -14 11 -17 11 -6 0 -129 72 -136 80 -3 3 -33 23 -68 45 -75 48 -296 212 -335 249 -15 14 -30 26 -33 26 -15 0 -304 284 -384 379 -30 35 -62 71 -71 80 -8 9 -30 36 -49 61 -19 25 -37 47 -40 50 -4 3 -35 48 -71 100 -35 52 -69 100 -75 105 -6 6 -20 26 -30 45 -11 19 -22 37 -25 40 -3 3 -14 21 -24 40 -17 32 -53 88 -65 100 -3 3 -14 23 -25 45 -11 22 -23 42 -26 45 -10 8 -85 157 -115 228 -7 18 -20 47 -28 65 -8 17 -16 41 -19 52 -3 11 -15 45 -27 75 -12 30 -25 69 -30 85 -5 17 -13 45 -19 63 -6 17 -16 47 -22 65 -13 40 -28 91 -38 137 -5 19 -20 80 -34 135 -151 597 -151 1137 0 1730 14 55 28 111 30 125 11 58 103 348 132 415 5 11 19 45 31 75 42 102 109 247 140 300 5 8 29 50 54 93 25 43 46 82 46 87 0 6 5 10 10 10 6 0 10 5 10 11 0 6 17 35 38 66 20 30 42 62 47 71 6 9 15 22 20 28 6 7 39 53 74 103 36 50 68 91 73 91 4 0 8 6 8 14 0 8 4 16 8 18 5 2 37 37 72 78 35 41 83 94 107 117 24 24 43 45 43 49 0 3 16 20 36 37 20 18 69 64 109 102 40 39 105 97 146 130 41 33 88 72 104 88 17 15 38 30 48 33 9 3 17 10 17 15 0 5 4 9 9 9 6 0 24 13 41 29 18 16 44 35 58 42 15 8 29 16 32 19 15 15 71 50 80 50 5 0 10 4 10 8 0 5 10 14 23 21 12 6 36 20 52 31 17 11 37 23 45 27 8 4 42 23 75 43 33 19 119 64 190 99 72 34 138 67 147 72 10 5 46 18 80 30 35 12 67 25 72 30 6 5 18 9 27 9 10 0 30 6 46 14 26 13 177 60 288 91 273 74 554 119 858 136 267 16 504 -2 777 -56 41 -9 100 -20 130 -26 62 -12 154 -34 220 -54 25 -7 74 -20 110 -30 36 -9 81 -23 100 -30 78 -27 106 -37 135 -45 46 -13 104 -35 111 -43 4 -4 13 -7 21 -7 11 0 118 -45 164 -70 8 -4 40 -21 70 -36 30 -15 56 -31 59 -34 3 -3 35 -21 73 -40 37 -19 75 -40 85 -45 27 -16 286 -189 292 -195 3 -3 34 -28 70 -55 36 -26 70 -53 75 -60 6 -6 30 -26 55 -44 60 -43 227 -197 320 -295 41 -44 96 -100 121 -125 25 -25 67 -75 94 -111 26 -36 50 -67 54 -70 4 -3 37 -45 74 -95 37 -49 71 -95 77 -102 5 -7 17 -28 27 -47 9 -20 20 -36 25 -36 4 0 8 -4 8 -10 0 -5 17 -38 39 -73 33 -54 87 -162 146 -292 38 -82 129 -267 157 -318 61 -110 169 -207 283 -253 66 -27 78 -29 210 -29 105 1 154 5 195 18 30 10 71 22 90 28 19 6 55 20 80 31 25 11 54 24 65 28 11 5 45 19 75 33 30 14 80 35 110 47 30 12 69 28 85 35 17 7 41 17 55 23 55 22 257 105 285 117 26 12 148 61 210 85 29 11 176 71 200 81 11 4 45 18 75 30 30 11 69 27 85 34 17 8 62 26 100 40 39 15 84 33 100 40 17 7 55 23 85 34 99 40 144 58 265 112 11 4 44 18 73 29 111 42 437 201 498 242 23 15 47 28 53 28 6 0 11 4 11 8 0 4 15 16 33 27 36 21 137 120 137 135 0 4 6 15 13 22 31 33 47 112 47 238 0 131 -8 168 -66 318 -34 89 -37 95 -74 177 -84 185 -221 462 -275 560 -19 33 -39 71 -45 85 -6 13 -14 27 -18 30 -4 3 -23 35 -41 73 -19 37 -39 67 -43 67 -4 0 -8 5 -8 11 0 10 -67 126 -80 139 -10 10 -31 45 -36 63 -4 9 -10 17 -14 17 -4 0 -10 8 -14 18 -6 20 -17 37 -70 111 -22 30 -64 90 -94 134 -52 77 -107 152 -138 190 -8 9 -14 22 -14 27 0 6 -4 10 -9 10 -5 0 -26 25 -46 55 -21 30 -42 55 -47 55 -4 0 -8 7 -8 15 0 8 -4 15 -8 15 -5 0 -20 15 -33 34 -13 19 -45 58 -70 87 -26 30 -78 90 -115 134 -38 44 -86 96 -106 116 -21 20 -38 39 -38 42 0 5 -411 417 -416 417 -2 0 -25 21 -52 48 -27 26 -75 70 -107 97 -32 28 -69 59 -81 70 -47 43 -81 71 -124 104 -25 19 -47 37 -50 40 -3 4 -36 31 -75 61 -38 30 -77 61 -85 67 -49 40 -238 177 -315 228 -49 33 -96 65 -103 72 -6 6 -21 15 -32 18 -11 3 -20 11 -20 16 0 5 -4 9 -9 9 -5 0 -37 18 -70 40 -33 22 -62 40 -65 40 -3 0 -24 12 -48 28 -69 44 -82 51 -103 62 -11 6 -33 19 -50 30 -16 11 -39 24 -50 30 -11 6 -56 30 -100 54 -89 48 -355 182 -425 214 -116 52 -187 84 -205 92 -11 4 -42 18 -70 30 -27 12 -59 26 -70 31 -11 4 -44 16 -73 25 -29 9 -55 20 -58 25 -3 5 -15 9 -28 9 -12 0 -26 4 -32 9 -9 9 -250 95 -309 111 -16 5 -43 13 -60 19 -16 5 -50 15 -75 21 -25 7 -60 18 -78 26 -18 8 -41 14 -51 14 -9 0 -37 6 -62 14 -24 7 -73 21 -109 30 -36 10 -87 23 -115 31 -27 8 -61 16 -75 19 -14 2 -68 14 -120 25 -52 12 -135 29 -185 37 -49 8 -126 21 -170 29 -188 33 -410 63 -560 75 -60 5 -162 14 -225 20 -170 15 -918 11 -1065 -6z m1050 -1139 c381 -40 711 -91 970 -150 33 -8 85 -19 115 -26 86 -18 174 -42 370 -100 58 -17 116 -35 130 -41 14 -6 39 -14 55 -18 80 -22 296 -106 495 -193 109 -47 148 -66 280 -132 156 -78 212 -107 220 -115 3 -3 25 -15 50 -28 25 -13 68 -37 95 -53 28 -16 65 -37 83 -46 17 -9 32 -20 32 -25 0 -4 5 -8 10 -8 19 0 300 -180 300 -192 0 -4 4 -8 10 -8 17 0 190 -120 190 -132 0 -4 7 -8 15 -8 8 0 15 -4 15 -9 0 -5 8 -12 18 -15 9 -3 31 -19 48 -34 17 -16 61 -50 98 -77 36 -27 66 -52 66 -57 0 -4 6 -8 14 -8 8 0 16 -4 18 -9 2 -4 39 -39 83 -77 44 -38 103 -91 131 -119 29 -27 90 -87 135 -131 117 -113 233 -235 308 -324 35 -41 75 -85 87 -97 13 -12 24 -26 24 -32 0 -5 4 -11 9 -13 16 -6 361 -457 361 -473 0 -3 8 -14 18 -24 32 -37 42 -50 42 -61 0 -5 3 -10 8 -10 4 0 16 -17 27 -37 11 -20 25 -41 30 -47 9 -10 54 -76 82 -121 7 -11 16 -28 19 -37 3 -10 10 -18 14 -18 4 0 13 -13 20 -30 7 -16 15 -30 19 -30 3 0 12 -15 20 -32 8 -18 19 -40 26 -48 22 -27 92 -160 120 -228 27 -63 13 -84 -87 -131 -46 -21 -101 -45 -123 -53 -103 -40 -132 -51 -160 -63 -16 -7 -48 -20 -70 -28 -55 -20 -176 -67 -200 -77 -11 -5 -45 -19 -75 -31 -30 -12 -75 -30 -100 -41 -25 -11 -56 -24 -70 -30 -14 -6 -38 -16 -55 -23 -16 -7 -46 -19 -65 -25 -54 -20 -102 -40 -133 -56 -16 -8 -36 -14 -46 -14 -9 0 -21 -4 -26 -9 -6 -4 -32 -16 -59 -25 -50 -16 -65 -12 -66 21 0 6 -3 13 -7 15 -5 2 -26 39 -47 83 -22 44 -42 82 -45 85 -3 3 -40 73 -81 155 -41 83 -77 152 -81 155 -3 3 -18 29 -33 59 -38 73 -49 93 -62 111 -10 13 -28 46 -88 155 -6 11 -13 22 -16 25 -10 10 -64 94 -76 120 -4 8 -10 17 -13 20 -10 9 -51 69 -51 75 0 3 -5 11 -10 18 -6 7 -32 44 -60 82 -27 39 -54 75 -60 82 -5 7 -10 15 -10 18 0 3 -8 14 -17 24 -33 36 -43 50 -43 60 0 5 -4 11 -8 13 -4 2 -30 32 -57 68 -27 36 -55 70 -61 75 -6 6 -40 46 -74 90 -35 44 -70 87 -80 95 -9 8 -49 52 -88 97 -91 103 -311 326 -422 425 -115 104 -131 118 -186 163 -26 22 -55 47 -64 55 -8 9 -34 29 -55 45 -22 17 -46 36 -53 43 -34 32 -281 212 -291 212 -6 0 -11 3 -11 8 0 6 -87 66 -272 185 -31 21 -61 37 -66 37 -6 0 -12 4 -14 8 -8 20 -408 230 -563 296 -16 7 -43 19 -60 26 -16 7 -45 19 -62 26 -45 19 -91 39 -135 58 -20 9 -39 16 -43 16 -4 0 -21 6 -38 14 -30 12 -50 20 -154 60 -21 8 -56 20 -78 27 -22 6 -56 17 -75 24 -19 7 -51 18 -70 24 -19 7 -48 16 -65 21 -16 4 -41 12 -55 18 -24 9 -86 28 -195 58 -27 7 -72 20 -100 28 -27 8 -75 20 -105 26 -30 6 -80 18 -110 25 -204 49 -427 82 -825 121 -116 12 -270 17 -487 18 -326 1 -354 6 -213 35 33 7 74 18 90 23 17 5 57 13 90 18 67 9 167 24 300 45 256 40 393 59 650 89 176 20 765 21 960 1z m-1490 -1375 c260 -21 520 -59 790 -116 39 -8 81 -14 95 -14 35 0 70 -11 70 -21 0 -5 -24 -9 -52 -9 -29 0 -107 -7 -173 -15 -66 -8 -167 -19 -225 -25 -218 -24 -605 -106 -825 -175 -22 -7 -60 -18 -85 -25 -54 -15 -235 -74 -270 -88 -14 -5 -43 -17 -65 -25 -57 -21 -204 -80 -280 -112 -75 -32 -298 -148 -364 -189 -22 -14 -45 -26 -51 -26 -5 0 -10 -4 -10 -9 0 -5 -13 -14 -30 -21 -16 -7 -30 -16 -30 -20 0 -4 -8 -10 -17 -14 -18 -5 -53 -26 -63 -36 -15 -15 -71 -50 -80 -50 -5 0 -10 -4 -10 -10 0 -5 -6 -10 -14 -10 -8 0 -16 -3 -18 -7 -1 -5 -32 -28 -68 -53 -36 -24 -66 -48 -68 -52 -2 -4 -8 -8 -13 -8 -17 0 -203 -142 -269 -206 -134 -128 -526 -520 -559 -559 -19 -22 -52 -64 -75 -92 -22 -29 -44 -53 -48 -53 -5 0 -8 -7 -8 -15 0 -8 -3 -15 -7 -15 -5 0 -21 -20 -38 -45 -16 -24 -33 -45 -37 -45 -5 0 -8 -7 -8 -15 0 -8 -4 -15 -9 -15 -6 0 -20 -18 -32 -40 -13 -22 -26 -40 -31 -40 -4 0 -8 -5 -8 -11 0 -6 -13 -28 -30 -49 -16 -21 -30 -42 -30 -48 0 -6 -3 -12 -8 -14 -11 -4 -82 -114 -82 -126 0 -6 -3 -12 -8 -14 -10 -4 -133 -220 -198 -348 -29 -58 -104 -220 -104 -226 0 -2 -13 -32 -29 -66 -15 -35 -38 -88 -50 -118 -12 -30 -26 -64 -31 -75 -10 -23 -114 -337 -134 -405 -57 -193 -80 -290 -110 -465 -30 -172 -36 -242 -52 -550 -14 -265 -15 -352 -5 -595 14 -343 30 -481 82 -710 27 -122 89 -350 114 -420 7 -19 18 -51 24 -70 7 -19 17 -48 21 -65 18 -64 62 -180 71 -189 5 -6 9 -18 9 -28 0 -10 4 -26 9 -36 5 -9 19 -39 31 -67 101 -232 200 -434 284 -575 8 -14 22 -41 32 -60 10 -19 24 -41 31 -48 7 -7 13 -17 13 -22 0 -5 6 -15 13 -22 6 -7 21 -29 31 -48 11 -19 32 -51 48 -71 15 -20 28 -42 28 -48 0 -6 3 -11 8 -11 4 0 16 -17 27 -37 11 -20 25 -41 30 -47 6 -6 46 -58 90 -116 92 -123 215 -271 262 -317 18 -17 33 -34 33 -37 0 -5 232 -237 322 -322 24 -22 70 -62 103 -89 32 -26 64 -53 70 -59 23 -22 97 -80 207 -162 62 -46 118 -88 125 -94 7 -5 15 -10 18 -10 3 0 18 -8 33 -19 52 -35 137 -89 177 -111 22 -12 54 -30 70 -40 54 -34 456 -239 530 -270 56 -24 104 -45 145 -62 25 -11 54 -23 65 -28 11 -4 36 -15 55 -23 66 -28 291 -105 410 -141 122 -37 214 -54 640 -116 72 -11 466 -39 560 -40 53 -1 38 -15 -32 -29 -24 -5 -90 -20 -148 -35 -278 -68 -554 -106 -920 -126 -241 -13 -369 -12 -630 5 -316 20 -469 46 -832 141 -173 46 -460 137 -548 175 -14 6 -38 17 -55 24 -16 6 -47 20 -68 29 -21 9 -42 16 -47 16 -5 0 -48 18 -95 40 -47 22 -88 40 -91 40 -9 0 -307 150 -369 186 -33 19 -72 39 -87 45 -16 6 -28 15 -28 20 0 5 -5 9 -10 9 -6 0 -29 12 -53 27 -23 16 -56 35 -73 43 -16 8 -57 34 -90 58 -32 23 -104 75 -159 114 -55 39 -102 74 -105 77 -3 3 -27 24 -55 46 -27 22 -57 47 -66 55 -8 8 -55 48 -102 88 -48 40 -87 77 -87 83 0 5 -4 9 -10 9 -12 0 -250 237 -250 249 0 5 -6 11 -14 14 -7 3 -53 52 -102 109 -49 57 -93 108 -99 113 -6 6 -29 33 -50 60 -22 28 -42 52 -45 55 -3 3 -28 35 -55 73 -27 37 -52 67 -57 67 -4 0 -8 5 -8 10 0 6 -5 16 -10 23 -6 7 -33 44 -60 82 -28 39 -54 75 -60 82 -5 7 -10 17 -10 23 0 5 -4 10 -9 10 -5 0 -14 14 -21 30 -7 17 -16 30 -21 30 -5 0 -9 5 -9 11 0 6 -13 28 -28 48 -16 20 -32 43 -35 51 -4 8 -13 24 -19 35 -20 30 -52 85 -88 150 -19 33 -44 78 -56 100 -23 40 -133 262 -159 320 -8 17 -28 60 -44 98 -17 37 -31 73 -31 80 0 7 -7 22 -15 33 -8 10 -15 28 -15 38 0 11 -11 51 -24 90 -31 93 -70 227 -100 346 -10 36 -24 88 -32 116 -8 28 -14 60 -14 71 0 11 -6 39 -14 64 -7 24 -19 76 -26 114 -6 39 -17 102 -25 140 -7 39 -19 97 -25 130 -37 196 -51 841 -25 1185 14 183 23 253 50 380 7 36 19 94 25 130 6 36 17 90 25 120 62 251 95 373 137 515 45 150 58 188 67 210 21 48 53 122 61 140 27 67 42 102 51 118 33 60 69 136 69 146 0 6 11 30 25 52 14 22 30 50 36 62 5 12 15 31 22 42 12 20 106 183 156 268 13 23 30 47 37 54 7 7 16 22 19 33 3 11 11 20 16 20 5 0 9 5 9 10 0 12 41 73 53 78 4 2 7 10 7 17 0 7 3 15 8 17 4 2 32 39 61 83 30 44 59 82 63 83 4 2 8 10 8 18 0 8 4 14 8 14 5 0 34 35 64 78 31 42 72 94 92 116 20 21 36 40 36 41 0 12 254 280 355 374 142 132 169 156 260 231 50 41 99 83 110 93 11 10 32 26 48 35 15 9 27 20 27 24 0 4 6 8 14 8 8 0 16 3 18 8 5 13 85 72 97 72 6 0 11 4 11 8 0 4 30 28 68 52 37 24 69 48 70 52 2 4 10 8 18 8 8 0 14 5 14 10 0 6 5 10 11 10 6 0 31 14 56 30 24 17 46 30 48 30 2 0 21 12 42 26 21 14 47 30 58 35 11 6 56 30 100 54 44 25 141 75 215 111 130 64 160 77 225 104 17 7 44 19 60 25 17 7 50 21 75 30 25 9 59 22 75 29 41 17 94 36 130 46 17 5 62 19 100 33 160 55 500 139 735 181 107 18 264 43 355 54 101 13 697 14 850 2z m5497 -7484 c18 -8 52 -21 76 -30 23 -9 59 -22 80 -30 20 -8 69 -26 107 -41 98 -37 145 -55 180 -70 17 -7 55 -23 85 -34 30 -12 65 -26 78 -32 12 -5 32 -13 45 -18 44 -18 122 -53 139 -62 10 -5 22 -9 28 -9 5 0 42 -15 82 -34 40 -18 97 -44 127 -57 148 -65 256 -126 259 -146 3 -20 -70 -169 -124 -255 -13 -21 -24 -42 -24 -48 0 -5 -4 -10 -9 -10 -5 0 -11 -8 -15 -17 -3 -10 -15 -31 -26 -48 -11 -16 -23 -37 -27 -45 -19 -36 -186 -285 -194 -288 -5 -2 -9 -8 -9 -13 0 -10 -102 -152 -112 -157 -5 -2 -8 -10 -8 -18 0 -8 -4 -14 -10 -14 -5 0 -10 -7 -10 -15 0 -8 -4 -15 -8 -15 -4 0 -37 -39 -72 -87 -36 -48 -74 -97 -85 -109 -11 -12 -33 -39 -50 -60 -60 -76 -101 -123 -300 -336 -70 -76 -131 -139 -135 -140 -4 -2 -58 -50 -118 -108 -130 -124 -150 -141 -222 -200 -30 -24 -59 -49 -65 -55 -5 -6 -39 -33 -75 -60 -36 -28 -67 -53 -70 -56 -20 -22 -338 -251 -408 -294 -10 -5 -19 -12 -22 -15 -10 -11 -95 -64 -120 -76 -8 -4 -40 -24 -70 -44 -31 -20 -62 -39 -70 -43 -8 -4 -37 -21 -65 -37 -27 -17 -61 -36 -75 -43 -14 -6 -29 -15 -35 -20 -23 -18 -370 -193 -490 -247 -59 -26 -87 -39 -178 -79 -37 -17 -73 -31 -80 -31 -7 0 -22 -7 -33 -15 -10 -8 -28 -15 -40 -15 -11 0 -24 -4 -30 -9 -5 -5 -36 -16 -69 -26 -33 -9 -76 -23 -95 -30 -19 -7 -62 -20 -95 -30 -33 -10 -78 -23 -100 -30 -53 -16 -135 -39 -215 -60 -36 -10 -85 -23 -110 -30 -25 -7 -70 -18 -100 -24 -30 -7 -86 -19 -125 -28 -38 -8 -93 -21 -121 -29 -28 -8 -59 -14 -70 -14 -10 0 -50 -6 -89 -14 -661 -137 -1663 -125 -2350 28 -81 19 -200 45 -255 57 -25 6 -67 17 -95 24 -27 8 -66 18 -85 23 -35 8 364 21 699 23 86 0 192 4 236 9 44 5 114 12 155 15 113 9 353 49 480 80 30 7 80 18 110 25 92 18 248 60 325 86 23 8 48 14 57 14 10 0 32 6 50 14 18 8 62 23 98 35 93 29 133 42 152 52 10 5 24 9 33 9 8 0 29 6 47 14 18 8 49 21 70 30 20 9 39 16 43 16 4 0 21 6 38 14 18 7 88 37 157 66 125 52 471 217 480 230 3 3 21 12 40 20 19 8 37 17 40 20 3 3 30 19 60 34 30 16 57 31 60 35 3 3 21 15 40 25 19 10 53 31 75 45 22 14 57 35 78 46 20 11 37 22 37 26 0 4 8 9 18 13 17 5 52 26 62 36 7 7 63 46 118 82 85 57 252 182 252 190 0 4 7 8 15 8 8 0 15 4 15 8 0 5 24 25 53 45 29 20 71 53 93 73 21 20 62 54 89 76 112 90 595 564 595 584 0 3 11 15 24 27 25 24 80 87 136 157 19 24 42 51 51 59 8 9 30 36 49 61 19 25 37 47 40 50 4 3 22 28 40 55 19 28 39 55 45 60 7 6 26 31 43 57 40 61 73 108 92 129 8 10 24 35 35 56 11 21 22 40 25 43 9 9 50 69 50 74 0 4 62 101 78 121 4 6 16 26 25 45 10 19 27 49 37 65 11 17 31 53 45 80 14 28 41 77 60 110 19 33 59 110 90 170 88 174 133 259 144 272 6 7 11 14 11 16 0 15 32 77 40 77 5 0 24 -6 42 -14z"/>
      </clipPath>
    </defs>
    <rect clipPath="url(#monogram-clip)" fill="url(#linear)" width="100%" height="100%" />
    {highlight &&
      <g clipPath="url(#monogram-clip)">
        <rect fill={highlight || '#00e5ff'} width="100%" height="100%" />
      </g>
    }
  </svg>
);

export default Monogram;