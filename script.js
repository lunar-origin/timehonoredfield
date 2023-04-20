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
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cp\u003E本実験の実施者は岐阜大学教育学部の古田悠揮です。本実験・調査への参加はあなたの任意によるものです。\u003C\u002Fp\u003E\n\u003Col\u003E\n    \u003Cli\u003E本実験・調査の目的\n        \u003Cbr\u003E単語の記憶について調べることが本実験・調査の目的です。\n    \u003C\u002Fli\u003E\n    \u003Cli\u003E本実験・調査の手続き\n        \u003Cbr\u003Eもし，あなたが本実験・調査に参加にした場合，あなたは単語の学習などの認知課題に取り組んでいただきます。この実験・調査の所要時間は約N分程度です。\n    \u003C\u002Fli\u003E\n    \u003Cli\u003E潜在的なリスク・苦痛など\n        \u003Cbr\u003E実験による多少の疲労は除き，潜在的なリスクや苦痛はありません。また，いつ，いかなる理由でも，自由に実験を中止していただけます（6.参加と中止もご参照ください）。\n    \u003C\u002Fli\u003E\n    \u003Cli\u003E参加による利益\n        \u003Cbr\u003Eあなたが本実験・調査に参加することで学習，認知，感情についての研究を発展に繋がります。\n    \u003C\u002Fli\u003E\n    \u003Cli\u003E匿名性の確保\n        \u003Cbr\u003E本実験・調査によって得られた情報は法律による開示請求を除き，匿名性が維持されます。匿名性は実験参加者番号の付与，統計的解析によって保たれます。\n    \u003C\u002Fli\u003E\n    \u003Cli\u003E参加と中止\n        \u003Cbr\u003Eあなたは本実験・調査への参加もしくは不参加を自由に選択できます。また，参加した場合でも，いつでも，どのような理由でも，途中で実験・調査を中止することができます。\n        もし，途中で実験・調査を中止したくなった場合は，「ESCキー」を押した後，ウィンドウを閉じることで実験・調査を中止できます。\n    \u003C\u002Fli\u003E\n    \u003Cli\u003E実験・調査実施者への問い合わせ\n        \u003Cbr\u003E本実験・調査に対して質問がある場合は，実施者にお問い合わせください。\n    \u003C\u002Fli\u003E\n\u003C\u002Fol\u003E"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "実験・調査への参加に同意いただけますか？同意いただける方はチェックをお願いします。同意いただけない方は，ESCを押した後，ウィンドウを閉じてください。",
          "options": [
            {
              "label": "上記の説明をよく読み、理解したうえで、実験への参加に同意する。",
              "coding": "informedConsent"
            }
          ],
          "name": "esc"
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
      "title": "informedConsent"
    },
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
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//参加者IDをランダム生成
const digits = 10;
const participantID = this.random.range(10**digits, 10**(digits+1));
this.state.participantID = participantID;
}
      },
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
          "word": "あくよう"
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
          "word": "げきこう"
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
          "word": "ゆうふく"
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
          "word": "こううん"
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
                "width": 393.19,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${this.parameters.word}",
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
            "title": "word",
            "timeout": "1000"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "先に提示された単語を思い出して当てはまるように回答してください。もし思い出せない場合は最初に心に浮かんだ単語で回答してください。\nどうしても浮かばない場合には欄に「１」と入れ、次へ進んでください。"
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
          "word": "う○○り"
        },
        {
          "word": "あ○○み"
        },
        {
          "word": "か○○く"
        },
        {
          "word": "こ○○ん"
        },
        {
          "word": "た○○つ"
        },
        {
          "word": "は○○ん"
        },
        {
          "word": "ふ○○ん"
        },
        {
          "word": "ゆ○○つ"
        },
        {
          "word": "ご○○く"
        },
        {
          "word": "ご○○り"
        },
        {
          "word": "ぎ○○ん"
        },
        {
          "word": "ご○○う"
        },
        {
          "word": "さ○○ず"
        },
        {
          "word": "せ○○う"
        },
        {
          "word": "ば○○ん"
        },
        {
          "word": "ぱ○○く"
        },
        {
          "word": "あ○○つ"
        },
        {
          "word": "お○○か"
        },
        {
          "word": "あ○○ん"
        },
        {
          "word": "か○○き"
        },
        {
          "word": "お○○で"
        },
        {
          "word": "じ○ん○ん"
        },
        {
          "word": "ゆ○○く"
        },
        {
          "word": "な○き○ち"
        },
        {
          "word": "こ○○ん"
        },
        {
          "word": "し○○り"
        },
        {
          "word": "た○○み"
        },
        {
          "word": "は○○め"
        },
        {
          "word": "ぼ○○ん"
        },
        {
          "word": "あ○じ○う"
        },
        {
          "word": "お○に○り"
        },
        {
          "word": "す○ら○い"
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
      "skip": "${this.state.participantID % 2 != 0}",
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
                "required": true,
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
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "word": "あ○ず○り"
        },
        {
          "word": "い○じ○し"
        },
        {
          "word": "く○し○る"
        },
        {
          "word": "こ○き○う"
        },
        {
          "word": "し○っ○ん"
        },
        {
          "word": "ふ○い○つ"
        },
        {
          "word": "む○ん○ん"
        },
        {
          "word": "あ○○う"
        },
        {
          "word": "ぎ○く○い"
        },
        {
          "word": "け○じ○う"
        },
        {
          "word": "き○う○く"
        },
        {
          "word": "さ○じ○き"
        },
        {
          "word": "し○う○き"
        },
        {
          "word": "ち○う○つ"
        },
        {
          "word": "て○り○と"
        },
        {
          "word": "げ○○う"
        },
        {
          "word": "あ○た○い"
        },
        {
          "word": "そ○○ぜ"
        },
        {
          "word": "ち○○わ"
        },
        {
          "word": "む○○か"
        },
        {
          "word": "つ○ま○い"
        },
        {
          "word": "に○じ○う"
        },
        {
          "word": "や○ら○い"
        },
        {
          "word": "や○ら○る"
        },
        {
          "word": "く○す○す"
        },
        {
          "word": "い○っ○い"
        },
        {
          "word": "さ○ら○ず"
        },
        {
          "word": "せ○し○ん"
        },
        {
          "word": "か○○ん"
        },
        {
          "word": "い○○と"
        },
        {
          "word": "さ○○つ"
        },
        {
          "word": "こ○○と"
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
      "title": "IB phase",
      "skip": "${this.state.participantID % 2 != 1}",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "IB trial",
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
                "required": true,
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
            "title": "IB test"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "先に提示された単語を思い出してそれ以外の単語で回答してください。もし思い出せない場合は最初に心に浮かんだ単語で回答してください。\nどうしても浮かばない場合には欄に「１」と入れ、次へ進んでください。"
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
          "word": "う○○り"
        },
        {
          "word": "あ○○み"
        },
        {
          "word": "か○○く"
        },
        {
          "word": "こ○○ん"
        },
        {
          "word": "た○○つ"
        },
        {
          "word": "は○○ん"
        },
        {
          "word": "ふ○○ん"
        },
        {
          "word": "ゆ○○つ"
        },
        {
          "word": "ご○○く"
        },
        {
          "word": "ご○○り"
        },
        {
          "word": "ぎ○○ん"
        },
        {
          "word": "ご○○う"
        },
        {
          "word": "さ○○ず"
        },
        {
          "word": "せ○○う"
        },
        {
          "word": "ば○○ん"
        },
        {
          "word": "ぱ○○く"
        },
        {
          "word": "あ○○つ"
        },
        {
          "word": "お○○か"
        },
        {
          "word": "あ○○ん"
        },
        {
          "word": "か○○き"
        },
        {
          "word": "お○○で"
        },
        {
          "word": "じ○ん○ん"
        },
        {
          "word": "ゆ○○く"
        },
        {
          "word": "な○き○ち"
        },
        {
          "word": "こ○○ん"
        },
        {
          "word": "し○○り"
        },
        {
          "word": "た○○み"
        },
        {
          "word": "は○○め"
        },
        {
          "word": "ぼ○○ん"
        },
        {
          "word": "あ○じ○う"
        },
        {
          "word": "お○に○り"
        },
        {
          "word": "す○ら○い"
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
      "title": "EA phase",
      "skip": "${this.state.participantID % 2 != 1}",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "EA trial",
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
                "required": true,
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
            "title": "EA test"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "word": "あ○ず○り"
        },
        {
          "word": "い○じ○し"
        },
        {
          "word": "く○し○る"
        },
        {
          "word": "こ○き○う"
        },
        {
          "word": "し○っ○ん"
        },
        {
          "word": "ふ○い○つ"
        },
        {
          "word": "む○ん○ん"
        },
        {
          "word": "あ○○う"
        },
        {
          "word": "ぎ○く○い"
        },
        {
          "word": "け○じ○う"
        },
        {
          "word": "き○う○く"
        },
        {
          "word": "さ○じ○き"
        },
        {
          "word": "し○う○き"
        },
        {
          "word": "ち○う○つ"
        },
        {
          "word": "て○り○と"
        },
        {
          "word": "げ○○う"
        },
        {
          "word": "あ○た○い"
        },
        {
          "word": "そ○○ぜ"
        },
        {
          "word": "ち○○わ"
        },
        {
          "word": "む○○か"
        },
        {
          "word": "つ○ま○い"
        },
        {
          "word": "に○じ○う"
        },
        {
          "word": "や○ら○い"
        },
        {
          "word": "や○ら○る"
        },
        {
          "word": "く○す○す"
        },
        {
          "word": "い○っ○い"
        },
        {
          "word": "さ○ら○ず"
        },
        {
          "word": "せ○し○ん"
        },
        {
          "word": "か○○ん"
        },
        {
          "word": "い○○と"
        },
        {
          "word": "さ○○つ"
        },
        {
          "word": "こ○○と"
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
      "skip": "${this.state.participantID % 2 != 0}",
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
                "required": true,
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
          "content": "これで実験を終了いたします。ご協力ありがとうございました。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "終了する",
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
})

// Let's go!
study.run()