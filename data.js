// Meanings in "m" are Slade's own words from "Talmid Assignment #1: Know and Spell".
// g = verified script, p = verified pronunciation, s = Strong's no. (see sources.md)
const LESSONS = [
 {id:"l1", title:"Lesson 1", sub:"Disciple, Verbs, Galatians 1:10", free:true, sets:[
  {id:"core", title:"Disciple + 7 Verbs", words:[
   {t:"Talmid", m:"disciple (singular)", g:"תַּלְמִיד", p:"tal-meed'", s:"H8527"},
   {t:"Talmudim", m:"disciple (plural)"},
   {t:"Talmidim", m:"disciple (plural)"},
   {t:"poreuomai", m:"Go", g:"πορεύομαι", p:"por-yoo'-om-ahee", s:"G4198", v:"Matthew 28:19 (ESV)", vf:"πορευθέντες", vt:"Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,"},
   {t:"Matheteusate", m:"Make disciples — (verb) turn into disciple (Matthew 28:19)", g:"μαθητεύσατε", p:"math-ayt-yoo'-o", s:"G3100", v:"Matthew 28:19 (ESV)", vf:"μαθητεύσατε", vt:"Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,"},
   {t:"baptizo", m:"Baptize (dip, to sink)", g:"βαπτίζω", p:"bap-tid'-zo", s:"G907", v:"Matthew 28:19 (ESV)", vf:"βαπτίζοντες", vt:"Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,"},
   {t:"didasko", m:"Teach", g:"διδάσκω", p:"did-as'-ko", s:"G1321", v:"Matthew 28:20 (ESV)", vf:"διδάσκοντες", vt:"teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.”"},
   {t:"tereo", m:"Obey/observe: to keep in tact, spiritually guard (preserve), “Just like I taught you to do it, so should they”", g:"τηρέω", p:"tay-reh'-o", s:"G5083", v:"Matthew 28:20 (ESV)", vf:"τηρεῖν", vt:"teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.”"},
   {t:"entellomai", m:"Commanded — entole: reach the end of the command, completed product or task.", g:"ἐντέλλομαι", p:"en-tel'-lom-ahee", s:"G1781", v:"Matthew 28:20 (ESV)", vf:"ἐνετειλάμην", vt:"teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.”"},
   {t:"eimi", m:"I Am (I exist)", g:"εἰμί", p:"i-mee'", s:"G1510", v:"Matthew 28:20 (ESV)", vf:"εἰμι", vt:"teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.”"}
  ]},
  {id:"gal", title:"Galatians 1:10 Words", words:[
   {t:"peitho", m:"persuade (KJV: persuade, trust, obey, believe, agree, assure) · ESV 1:10: seeking the approval of", g:"πείθω", p:"pi'-tho", s:"G3982"},
   {t:"zeteo", m:"seek (KJV: seek, desire, endeavour, enquire, require) · ESV 1:10: trying", g:"ζητέω", p:"dzay-teh'-o", s:"G2212"},
   {t:"aresko", m:"please (KJV: please) · ESV 1:10: please / pleasing", g:"ἀρέσκω", p:"ar-es'-ko", s:"G700"},
   {t:"anthropos", m:"man (KJV: man, certain) · ESV 1:10: man", g:"ἄνθρωπος", p:"anth'-ro-pos", s:"G444"},
   {t:"theos", m:"God (KJV: God, god, godly) · ESV 1:10: God", g:"θεός", p:"theh'-os", s:"G2316"},
   {t:"doulos", m:"servant (KJV: servant, bondman) · ESV 1:10: servant", g:"δοῦλος", p:"doo'-los", s:"G1401"},
   {t:"Christos", m:"Christ (KJV: Christ) · ESV 1:10: Christ", g:"Χριστός", p:"khris-tos'", s:"G5547"}
  ]}
 ], verse:{ref:"Galatians 1:10 (ESV)", text:"For am I now seeking the approval of man, or of God? Or am I trying to please man? If I were still trying to please man, I would not be a servant of Christ."}},
 {id:"l1b", title:"Lesson 2", sub:"Mathetes", sets:[
  {id:"disc", title:"Mathetes", words:[
   {t:"Mathetes", m:"(noun) disciple", g:"μαθητής", p:"math-ay-tes'", s:"G3101"}
  ]}
 ]},
 {id:"l2", title:"Lesson 3", sub:"Other Key Words", sets:[{id:"key",title:"Other Key Words",words:[
   {t:"S'mikhah / exousia", m:"Authority - Heb. (S'mikhah) Greek (exousia) - out of being, power to act"},
   {t:"Ta Ethne", m:"All Nations: All language/people groups"},
   {t:"Zugos", m:"Yoke (Matthew 11:29) beliefs, interpretations, doctrine of a Rabbi"},
   {t:"Anothen", m:"Born again (John 3:3)"}]}]},
 {id:"l3", title:"Lesson 4", sub:"Jewish Education", sets:[{id:"edu",title:"Jewish Educational System (Steve Corn)",words:[
   {t:"Torah", m:"1st 5 Books of OT"},
   {t:"Talmud", m:"central text of Rabbinic Judaism"},
   {t:"Tanakh", m:"complete Hebrew Scriptures (Torah, Prophets, Writings)"},
   {t:"Bet Sefer", m:"House of the Book: Age 6-10"},
   {t:"Bet Talmud", m:"House of Learning: Age 10-14"},
   {t:"Bet Midrash", m:"House of Study: Age 15"}]}]},
 {id:"l4", title:"Lesson 5", sub:"Apostle, Equip, Serve", sets:[{id:"parts",title:"Word Parts",words:[
   {t:"Apostolos", m:"Apostle"},{t:"Stolos", m:"one sent"},{t:"Apo", m:"away from"},
   {t:"Katartismon", m:"equip (Ephesians 4:12)"},{t:"Artisan", m:"skilled craftsman"},
   {t:"Diakonia", m:"deacon"},{t:"Konia", m:"kick dust"},{t:"Dia", m:"through"}]}]},
 {id:"l5", title:"Lesson 6", sub:"Growth Words", sets:[{id:"grow",title:"Growth",words:[
   {t:"Prostithemi", m:"added: Acts 2:41"},{t:"Plethuno", m:"increase/multiply: Acts 6:7"}]}]},
 {id:"l6", title:"Lesson 7", sub:"Natural, Spiritual, Carnal", sets:[{id:"nsc",title:"Natural / Spiritual / Carnal",words:[
   {t:"Psuchikos", m:"natural (1 Corinthians 2:14)"},{t:"Psucho", m:"soul"},
   {t:"Pneumatikos", m:"spiritual (1 Corinthians 2:15)"},{t:"Pneuma", m:"Spirit"},
   {t:"Sarkinos", m:"Carnal (New - Baby): 1 Corinthians 3:1"},
   {t:"Sarkikos", m:"Nominal Believer (by Name only): 1 Corinthians 3:3"},
   {t:"Sark", m:"flesh"},{t:"ikos", m:"adapted to"}]}]},
 {id:"l7", title:"Lesson 8", sub:"Diatribo, Emblepo", sets:[{id:"de",title:"Diatribo / Emblepo",words:[
   {t:"Diatribo", m:"spent time, tarried, remained there: John 3:22"},{t:"Tribo", m:"to rub"},
   {t:"Dia", m:"into/through"},{t:"Emblepo", m:"looked: John 1:42"},{t:"blepo", m:"casual gaze"},{t:"Em", m:"through"}]}]},
 {id:"l8", title:"Lesson 9", sub:"Memory + Commissions", sets:[{id:"mem",title:"Commissions",words:[
   {t:"Mt 28:18-20", m:"Commission 1"},{t:"Mk 16:15", m:"Commission 2"},{t:"Lk 24:47", m:"Commission 3"},
   {t:"Jn 20:21", m:"Commission 4"},{t:"Acts 1:8", m:"Commission 5"}]}],
  verse:{ref:"Memory Statement", text:"What is it I must say No to in order that I may say yes to a lifestyle that MULTIPLIES"}}
];
