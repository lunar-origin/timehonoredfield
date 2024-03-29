// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Full Screen",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "この実験はフルスクリーンで実行されます。",
          "hint": "準備ができたらクリックしてください。",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "単語が呈示されます。可能な限り覚えてください。"
            },
            {
              "required": true,
              "type": "checkbox",
              "label": "指示が理解出来たらチェックを入れ、「つぎへ」を押してください。",
              "options": [
                {
                  "label": "指示が理解できた。",
                  "coding": "notice0"
                }
              ],
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つぎへ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "learning inst"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "word": "あとずさり"
            },
            {
              "word": "いくじなし"
            },
            {
              "word": "くるしめる"
            },
            {
              "word": "こんきゅう"
            },
            {
              "word": "しゃっきん"
            },
            {
              "word": "ふせいじつ"
            },
            {
              "word": "むかんしん"
            },
            {
              "word": "ひんじゃく"
            },
            {
              "word": "うんざり"
            },
            {
              "word": "あわれみ"
            },
            {
              "word": "かんごく"
            },
            {
              "word": "こんなん"
            },
            {
              "word": "たいくつ"
            },
            {
              "word": "はんかん"
            },
            {
              "word": "ふきげん"
            },
            {
              "word": "ゆううつ"
            },
            {
              "word": "ぎゃくたい"
            },
            {
              "word": "けんじゅう"
            },
            {
              "word": "きょうはく"
            },
            {
              "word": "さつじんき"
            },
            {
              "word": "しゅうげき"
            },
            {
              "word": "ちゅうぜつ"
            },
            {
              "word": "てろりすと"
            },
            {
              "word": "ぼうりょく"
            },
            {
              "word": "ごうよく"
            },
            {
              "word": "ごきぶり"
            },
            {
              "word": "ぎろちん"
            },
            {
              "word": "ごうとう"
            },
            {
              "word": "さしきず"
            },
            {
              "word": "せんそう"
            },
            {
              "word": "ばくだん"
            },
            {
              "word": "ぱにっく"
            },
            {
              "word": "あたたかい"
            },
            {
              "word": "そよかぜ"
            },
            {
              "word": "ちょうわ"
            },
            {
              "word": "むてんか"
            },
            {
              "word": "つつましい"
            },
            {
              "word": "にんじょう"
            },
            {
              "word": "やわらかい"
            },
            {
              "word": "やわらげる"
            },
            {
              "word": "あいさつ"
            },
            {
              "word": "おおらか"
            },
            {
              "word": "あんしん"
            },
            {
              "word": "かいてき"
            },
            {
              "word": "おもいで"
            },
            {
              "word": "じゅんしん"
            },
            {
              "word": "ぱんけーき"
            },
            {
              "word": "なみきみち"
            },
            {
              "word": "くりすます"
            },
            {
              "word": "いろっぽい"
            },
            {
              "word": "さぷらいず"
            },
            {
              "word": "せいしゅん"
            },
            {
              "word": "かいかん"
            },
            {
              "word": "いべんと"
            },
            {
              "word": "さいじつ"
            },
            {
              "word": "こいびと"
            },
            {
              "word": "だいふごう"
            },
            {
              "word": "しょうり"
            },
            {
              "word": "たのしみ"
            },
            {
              "word": "はなよめ"
            },
            {
              "word": "ぼうけん"
            },
            {
              "word": "あいじょう"
            },
            {
              "word": "おきにいり"
            },
            {
              "word": "すばらしい"
            }
          ],
          "sample": {
            "mode": "draw-shuffle"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "learning phase",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "learning trial",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Screen",
                "timeout": "500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 25.72,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "+",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "fixation",
                "timeout": "500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 589.78,
                    "height": 54.24,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${this.parameters.word}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "48",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "word",
                "timeout": "3000"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "次に，先ほど提示された単語を思い出してもらいます。\u003Cbr\u003E\n虫食いになった単語が手がかりとして表示されるので，\u003Cbr\u003E\u003Cb\u003E\u003Cu\u003E\u003Cfont color=\"red\"\u003Eその単語を思い出し，回答してください。\u003Cbr\u003E\nもし思い出せない場合は，その虫食いに合う単語を思い浮かべて単語を完成させてください。\u003C\u002Fb\u003E\u003C\u002Fu\u003E\u003C\u002Ffont\u003E\u003Cbr\u003E\nどうしても思い浮かばない場合には，空欄にして次へ進んでください。"
            },
            {
              "required": true,
              "type": "checkbox",
              "label": "指示が理解出来たらチェックを入れ、「つぎへ」を押してください。",
              "options": [
                {
                  "label": "指示が理解できた。",
                  "coding": "notice1"
                }
              ],
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つぎへ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Inclusion inst"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "word": "う〇〇り"
            },
            {
              "word": "い〇じ〇し"
            },
            {
              "word": "か〇〇く"
            },
            {
              "word": "こ〇き〇う"
            },
            {
              "word": "た〇〇つ"
            },
            {
              "word": "ふ〇い〇つ"
            },
            {
              "word": "ふ〇〇ん"
            },
            {
              "word": "ひ〇じ〇く"
            },
            {
              "word": "ご〇〇く"
            },
            {
              "word": "け〇じ〇う"
            },
            {
              "word": "ぎ〇〇ん"
            },
            {
              "word": "さ〇じ〇き"
            },
            {
              "word": "さ〇〇ず"
            },
            {
              "word": "ち〇う〇つ"
            },
            {
              "word": "ば〇〇ん"
            },
            {
              "word": "ぼ〇り〇く"
            },
            {
              "word": "あ〇た〇い"
            },
            {
              "word": "お〇〇か"
            },
            {
              "word": "あ〇〇ん"
            },
            {
              "word": "か〇〇き"
            },
            {
              "word": "お〇〇で"
            },
            {
              "word": "じ〇ん〇ん"
            },
            {
              "word": "ぱ〇け〇き"
            },
            {
              "word": "な〇き〇ち"
            },
            {
              "word": "だ〇ふ〇う"
            },
            {
              "word": "し〇〇り"
            },
            {
              "word": "た〇〇み"
            },
            {
              "word": "は〇〇め"
            },
            {
              "word": "ぼ〇〇ん"
            },
            {
              "word": "あ〇じ〇う"
            },
            {
              "word": "お〇に〇り"
            },
            {
              "word": "す〇ら〇い"
            }
          ],
          "sample": {
            "mode": "draw-shuffle"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "IA phase",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "IA trial",
            "content": [
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text",
                    "title": "${this.parameters.word}",
                    "content": ""
                  },
                  {
                    "required": false,
                    "type": "input",
                    "label": "単語を回答してください。",
                    "name": "name"
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "つぎへ",
                "submitButtonPosition": "right",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "IA test"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "次も，先ほど提示された単語を思い出してもらいます。\u003Cbr\u003E\n虫食いになった単語が手がかりとして思い出すのは同じですが，今度は，\u003Cb\u003E\u003Cu\u003E\u003Cfont color=\"red\"\u003E思い出した単語では答えず，その虫食いに合う単語を思い浮かべて単語を完成させてください。\u003C\u002Fb\u003E\u003C\u002Fu\u003E\u003C\u002Ffont\u003E\u003Cbr\u003E\nどうしても思い浮かばない場合には，空欄にして次へ進んでください。"
            },
            {
              "required": true,
              "type": "checkbox",
              "label": "指示が理解出来たらチェックを入れ、「つぎへ」を押してください。",
              "options": [
                {
                  "label": "指示が理解できた。",
                  "coding": "notice2"
                }
              ],
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つぎへ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Exclusion inst"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "word": "あ〇ず〇り"
            },
            {
              "word": "あ〇〇み"
            },
            {
              "word": "く〇し〇る"
            },
            {
              "word": "こ〇〇ん"
            },
            {
              "word": "し〇っ〇ん"
            },
            {
              "word": "は〇〇ん"
            },
            {
              "word": "む〇ん〇ん"
            },
            {
              "word": "ゆ〇〇つ"
            },
            {
              "word": "ぎ〇く〇い"
            },
            {
              "word": "ご〇〇り"
            },
            {
              "word": "き〇う〇く"
            },
            {
              "word": "ご〇〇う"
            },
            {
              "word": "し〇う〇き"
            },
            {
              "word": "せ〇〇う"
            },
            {
              "word": "て〇り〇と"
            },
            {
              "word": "ぱ〇〇く"
            },
            {
              "word": "あ〇〇つ"
            },
            {
              "word": "そ〇〇ぜ"
            },
            {
              "word": "ち〇〇わ"
            },
            {
              "word": "む〇〇か"
            },
            {
              "word": "つ〇ま〇い"
            },
            {
              "word": "に〇じ〇う"
            },
            {
              "word": "や〇ら〇い"
            },
            {
              "word": "や〇ら〇る"
            },
            {
              "word": "く〇す〇す"
            },
            {
              "word": "い〇っ〇い"
            },
            {
              "word": "さ〇ら〇ず"
            },
            {
              "word": "せ〇し〇ん"
            },
            {
              "word": "か〇〇ん"
            },
            {
              "word": "い〇〇と"
            },
            {
              "word": "さ〇〇つ"
            },
            {
              "word": "こ〇〇と"
            }
          ],
          "sample": {
            "mode": "draw-shuffle"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "EB phase",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "EB trial",
            "content": [
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text",
                    "title": "${this.parameters.word}",
                    "content": ""
                  },
                  {
                    "required": false,
                    "type": "input",
                    "label": "単語を回答してください。",
                    "name": "name"
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "つぎへ",
                "submitButtonPosition": "right",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "EB test"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "\u003Cb\u003Eこれで実験を終了いたします。\u003Cbr\u003Eご協力ありがとうございました。\u003C\u002Fb\u003E"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "実験の結果をダウンロードする",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "end"
        }
      ]
    }
  ]
})

// Let's go!
study.run()