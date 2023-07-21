const eyeAscii = `
;;;;;;;;;,,,''''''''''',,,;;;::::::c:::::ccccc::::;:;;;,,'''''''...............'''''''''''''',,,,,,,,,,,,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,," +
;;;;;;;;;;;;;;;;::::::::::::::::;;;;;;;;,,,,,,'''',,:cllloooddoddkOOkkkOkOOkoodddddxOOxdooolccllclcllloddddolccccc::;,;;,;;;'';codxxddoolcccc:;;;;;,,,''''.......................''''''''''',,''''''''''
;;;;;;;;;;;;;;;;:::::::::::::;;;;;;;;;;,,,,''''',;cllooodxddddddxkkxxdolccc:;;::;;,,;:::;,;,,,,,,,,,,,;;;;;,'.''.............;looooddoc::cc:;;;:::;;::;;,,''.......................'''''''''''''''''''''
;;;;;;;;;;;;;:::::::::::::;;;;;;;;;;;;,,''''',;:clloodddxxxdolcclccc::;;;,,'''''.'.....'.....................................',;::::;,'',;,,;:c::::::::;;;,,,''......................'''''''''''''''''''
;;;;;;;;;;;;:::::;;::::::;;;;;;;;;;,,,'..'',;:cloolodddoddol:,,,,',,''''''...............................................................',,,,,,;::::;;;:;;;,'''........................''''''''''''''''
;;;;;;;;;;;::::::::::::::::::;;;;,,''...,;:clooooollllccc::;,'''...........................................................................'..',;,,;,,;;;;,'''''''................................''''''
;;;;;;;;:::::::::::::::;;;:;;;;,,'...',;:cllllllccccc:;,,,;,........... ...........................................................................''''''''',,,,,''...................................''
;;;;;;;::::::::::::::::::;;;;,''..'',;:::ccc::c:::;,,,''..''..............................................'',,,,,,,,,''................................',,'',,,''''.....................................
;;;;;:::::::::::::::::::;;;,,'...',;::::;;;;;;:;,,'........................',::;clldl'.....................,;::cc:::;;;,'''......................................''...'.................................
;;;;::::::::::::::::::::;,,'..',,;:::;;;;;,,,',''........................';:lddloldOx;.....'...............',;clllllcc::;,,,''''.................................'''',,'''..............................
;;;:;;;;;;;::::::::::;;;,'..'',;;;;,;;,,'''''.................''.'','''.,::;;oxxkdox0k;.''''''...'''.........,:loodoollc::;;,,,,'''..................................''.................................
;;;;:;;;;;;:::::::::;;,'...',;;;,,,,,,''''.'..................',collc'..'c:;loxxk0OOKXo,'''',,',,'''''........,:lddxddollcc::;;;,,'''...................................................................
;;;;;;;;;:::::cc:::;;,'..',;;;,,''''.','.'''...............'',,:xOkd:'.',c::k0OkOKXXNNO:,,',;;;;;,,,;;,''.....';loxxxxddolllcc::;;,,,''.'...............................................................
;;;;;;;:::::::::::;,'..',,;,,,'''''...''''''........'''''',,,::lxOOd;...,lddO0000KXXXX0o:;,;::c::;;,,,,',,'....':odxxxxxdddoollcc::;;,'''''.............................................................
;;;:::::ccccc::::;,..',,,,,''''''''''.',,''''.......,,;;,,;;codkOkkx;...':llllcccccc:cc::cc::;::::;,,''''',,...';ldxkkkkxdddooollccc:;,,''''............................................................
:::::::ccccccc::;'..',,,,'''''''''',,,,;:;,'.........',,;;::cox00kkl. .......       ..',;cc::cc:::;,,,,,,,,'....':dkOOOkxxdddooooollc:;,,,'''''.........................................................
:::ccccccccccc:;''',,,''''''''''',;:::clc:;,............',:clodkkkx:. ...           ..',;:llcllccc::::;:;,......':okOOOkkxxddddooooolc:;;,,'''''........................................................
:cccccclccccc:;,',,,,,'''''''''',:cccloooll:'.....'...'',,;:lodxxdl,. ...            .';:coocclllc:;;;;cc;'.....';oxkOOkxxxxxddddddollc:;,,,,,''''......................................................
ccclllllllll:;,,;;,,'''''...',,;:cloodxdddoc,....';;,,,,,;::lddxxol;. ..             .';:llc::cc:;;;,,,,,'......';oxkOOkxxxdddddddoollc:;;,,;,,'''......................................................
cclllloodooc,,,;;;,'.....'',,;;:cloddxkxxxdo:'...';;;;;;:clldxxxxxxl'..             ..,;clc;;::::;;,,,'........',:okOOOkkxxxdddddddoollc::;;;,,,''''....................................................
llloooodolc;;;;;;,'...''',;;;::clloddxkkkkxdc;....'',;;;:clodxxxxxdo;...         ...',;;col;;;:;;;;;;,,,,''...'';cdkOOOOkkkxxddddddooolc::;;;;,,,''''...................................................
loooodddolc:c::;,'...'',;;:::cclllodxkkOOOkxoc,....',;;:cloodxxxdddoc:,'..........'',::cclooc::::;;,,,;:c;.....,:oxOOOOOkkkxxxxxxdooollc::;;;,,,,''''...................................................
oodxxxxdocllc:;'...''',;:::cllloodxkkkOOO0OOkoc,'''',,;clldddodddooolc:::;,;;,,,,;;;:cclllllllc:::;,,,,;,'....';ldkOOOOOOkkkxxxxddoollcc:;;;;,,,,'''''..................................................
oodkkkxollol:;'.'',,,,;:ccclooddxkkkkOOO00K00kdc;''''',;;:cllllooolloolllclollccccccllllllllllcc::,'',;;,.....,coxkOOOkkkkkkkxxxddoollcc:;;;;,,,,'''''...........................................'''''''
xxxkkkdllllc;'..',,:llcclllooddxkkkOOO000KKKK0kdl;'''''',;;;;::ccc:lodddoodxddooooccodc;:::cccc:::::;,''.....,:oxkOOOkkkkkxxxxxdddoolccc::;;;,,,,''''''..........'..................................''''
xkOOOxdllll:,',,,,;cO0oloddxddxxkkkO0000KKKKKK0Oxo:,''',,,,,;;::;:codooodooodddolccclooc:;;;;,;;,,,,,'.....',:odxkOOkkkkkxxxxddddoollcc::;;;;,,,,'''''''''.....'''''.........................''''''...''
kkOOkxolllc;;;:c::ccdkxooxxkxxxkkkOO00KKKKKKKKKK0Odc;''''''',;;::cccccloolccooolc:c::ccc::;;;;;,',,''.....';ldxxxkkkkxxxxxxxdddooollccc::;;;;;,,,,,,,'''''..''',,,'''.........................''''''''''
0000Oxoolc:;::lollxkdodxkxddxxkkOOO000KKKKKXXXXXXK0ko:,''''',,,;:c:;:ccccc:;:cc:;:::;;;;;;;;,,:c:,''''''';codxkkkkkkxxxxxxxxxddoollcccc:::::;;;,,,,,,,''''',,,;,,,,,'''.........''''''''''''''''''''''''
KKK0Oxdolc:;:cloddxO0kdxkxoodxkkkOO000KKKKKXXXXXXXK0Oxl:,',,,',;;;,;:c:;,;,,,,,,',,;;;,,',;::;::;''''',;:ldxkkOOkkkxxxdddddddddooollcccc::::;;;;;;;,,,,,,;;;;;;;;;,,,,'''''...'''''''''''''''''''''',,,,
KKKOOxdolcc:clloddxddddoddloodxkkOOO000KKKKXXXXXXXXXK0Oxoc;,'',,,,,,;,'''''..''''''',,,,',;::;;,''',,;cldxkOOOOkkxdddxxxdddddooollllccccc::;;;;;;;;;;;:::::::;;;,,,,,,,''''.''''''''',,,,,,,,''''''',,,,
XKK0Oxdolcc::cclooooocclllllodxkkkkOO000KKKKXXXXXXXXXKK0Okdl:;,'''''.....'......''''.',;,.',,'''',;clodkkOOOOOOkkxdddxxxxdddddooooolccc::::;;;;;;;:cllllcc::::;,,,,,,,,''''''''''''',,,,,,,,,,,,'''',,,,
KK00Okxolllcc:::cccllc:clllloddxkkkkkOO00000KXXXXNNNXXXXK00Okdoc;;,''.............,,'..''...''',:codxkkOOOOOOOOkkxxdddxxxxxddddooolllllcc::;;::cllooolllcc::;;,,,,,,,'''''''''..''''',,,,,,,,,,,,',,,,,,
KKK0OkdoooolllccccclllcccclodddxxkkkkOO00000KKXXXXXXXXXXXXXKK0Okxdol:;''.''.......'''....'',;:cldxkkOOOOOOOOOOkkkxxddxxxxxxddddooooollcccccllooddddooollcc:;;;,,''''''''...'''''''''',,,,,,,,,,,,,,,,,,,
KKK0OxdooddddddddddxxxxdddxxxdddxxxxkkOOO00KKKKXXXXXKKKXXXXXXKKK0OOkxdolcc:;;,,,,,,,,,,;::clodxkkkOOOOOOOOOOOOkkkxxxxxxxxxxxxdddoooolooodddxxdddddooollcc:;,,,,,,''''''....''''''''',,,,,,,,,,,,,,,,,,,,
KK0OkxdoodxkkOOOOO00000OOOOOkkkkkxxxkkkkOOOOOO00KKKKKKXXXKKKKKKKKK000OOkkxxddoooooooodddxxxkkkOOOOOOOOOOOOOOOOOkkkxxxxxxxxxxxxxddxxxkkkkxxddddddollc::::;;,,,'',,'''''''..''''''',,,,,,,;;;;;;;;;;;;;;;,
000OkkxkOKKKKXXXXNNNNNXKKXXK00000OOO00000OO0OOOO00KXXXXNXK0KXK0OddO0KOkkxOXK0000OkO00000OOOO00OOOOOOOOkkkxxxkkxxxxxxdooddddol:::::::;,;;;;::::;,;;,,,,,,,,,'''',,,''.'',,,,,;;;,,,,;`;

const hundredEye = `
,,,,,,;;;;;;;;;;;;;;;;:::::::::::::::::;;;;;;;;;;;;;;;;;;;;;;;:::;;;;;;;;::::::;;;;:::::::::::::
,,;;;;;;;;;;;;;;;;;;::;;;;;;;;;;;,,,,,'''''''''''''''''''''''''''''''''''',,,,,,,,,,,,,,;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;,,,,'''''',,,;;:clllllllllloollccccc::;;,,,,''..''.........'''''''''',,
;;;;;:::::;;;;;;;;;;,,,''',,,;;:cllllldxkO0K000000KKKK00OOOkkkkdoollccc:::;;,''''.............''
::::::::;;;;;;,,,,,'',,;::ccoooddxxkkkO0XXXXXXXXXXXXXXK00K0OOOkxxxxollllcc:::ccc:;,,'''.........
:::::;;;;;;;,,,''',;:cllooooxkkkOO0OkxkkO000Okxxxdddxxdxkkkxdooollc:;:::,;coddoolc:::;,,,''.....
::::;;;;;,,,''',,:clooddddddxxxdooll::::;;:c:;;,,,,,,,,;;:;,'''''.......,cddddl::cc;;::;;;;,,'..
:;;;;;;;,'''',;:lloodddxoc:::::;;,,'''''................................',,;;,'.,;,;:::::::;;,,,
:;;;;;,'..',:clooololllc;,''.....................................................'''',;;;;;;;,''
:;;;,'..',:clllllc::;,,,'.................................................................''''',
;;,'.',;::::::::;;,'.................',,,;,................,;;;;;,,,'......................'''''
,'.',;;:;;;;,,,,'.................',colloxd,....''.........';:cllc::;,,''.......................
.',;;;;;,,''''.............',,,'.':::oxxdxOo'''''''.''......';lodollc::;,,,''...................
',;;,,'''''''............',cddc,.,::oxxO0KXO:',,',;,,,,''....':odxddolcc::;,,''.................
,,,''''..''''.......'''',:cokkc'.,ldk000KKX0d;;;;:c:;;,,,''...;lxxxxddollcc:;;,'''..............
''''''''',,,'......',,,;:lxOOkc...,;:;;,,;;:::c::::::;,,',,'..':dkkkxxddoollc:;,,'''............
'.''',;;::c:,........';:clxOOd,...        ..,;cccclc::;;;,'....;okOOkxdddooolc:;;,''''..........
'''',:cllool:'....'''',;codxxl. ..        ..,:llccclc:;;::'....;lkOkkxxdddddolc:;,,,,''.........
'',;:lodxxxdl,..',;,,;:cloxxxo,..         ..;clc;;:c:;,,'......;okOkkxxdddddollc:;;,,,''........
;;::clodxkkkdc'..',,;;cldxxxxxc..       ...,:cl:;;::;;,,,'....':dkOOkkxxdddddolc::;;,,,''.......
::cclodxkOOOkd:'..',;:lodddddol:,'......'';:cllllcc::;,,:;'...;lxOOOOkkxxxddoolc:;;;,,,''.......
cloodxkkOO000kd:,'',,:cloooooloocc::c:;:::cccllllllc:;,,;'...'cdkOOOkkkkxxddollc:;;;,,''''......
oodxxkkOO00KKKOdc,''',;;::ccccodoooodoooccol:::cccc:::;'''..':oxkOOkkkxxxxddolcc:;;;,,,''''.....
xxxxkkO000KKKKK0ko;,'',,,;;::cloooolodolccclc:;;;;;,,,,....,:oxkkkkkkxxxddoollc::;;;,,,''''''...
dxxkkOO00KKKXXKKKOdc,'''',;::::clcc:clc::::::;;;,;;:;''.'';ldkkkkkxxxxxxddollcc:::;;;,,,,,,'''',
ooxkkOO00KKKXXXXXXKOo:,,'',;;,::;;;,,,,,,,;;,';:::::,'',;cdxkOOkkxxxxddddoollccc:::;;;;;,,,,;;;;
lodxkkOO00KKXXXXNXXK0kdl;,,,'',''''....'''',,',;;;,'',;ldkOOOOkxdddxxdddoooolcc::::;;;;;::ccc::;
lodxxkkOO0000KXXXXXXXK0Okdl:,''.........','.''''''',:ldkOOOOOOkxdddxxxxddooolllc:::::cclllllc::;
........O000KKXXXXXXXXXKK0kxol:;,,'..'''''.'',;;:loxkOOOOOOOkkxxdxxxxxdddooollcclloodddoollc:;,,
::;;,,,,''''''''''''
`;

const shots = `
KXK00KK000000000KKK000OO0KKKKKKKKKKOKKKKXKKKKKKKKKKKKKKXKKKKKKK00KK000KKKKK00000000OkO0OkOOkOOkxxxxx
000000000000000KK0KKK0OO0KKKKKKKKKK0KXXKKKKKKXXKKKKKKKXKKKKKKKKKKKKKKKKX0xl:::d0000OOOOOkkkkkkxdoooc
KK0000000000000KKKKKK0KKKKKK0KKKKKK0KXKXXXXXKXXXXKKKXKKKXKKKKKKKKKKKKXkc'     .lO00Okkkxdxxxxdllcc;,
O0kxO0OkO00OkO00O0000O00O00000KKKKK0KKKKKKK0KKKKKKKXKKK0OO00KK000OO0Kk'         :xxxddxxxdddxdlll;'.
OOxxkOkxkkOOkOOOOkkkkOOkkOOOOOOOO00OOOOOOOxdkOOOO00000OOOkkkOOkkOOkkOOl.        .cddxxkkxddxxxxddol:
O0O00OOOOO00OOO00OOOO00000000000000KK0000000000OO000000KK00000000000KX0;         ,O000Okxxdxxddoodxx
0KKKKKK0000000000000000000000KKKK0KKKKKK000KKKKK00KKKKKKKKK0000KKKKKKXXk'       .l000OOkxkxkxdxooodx
0K0K00000KK00000K00000000OO000K0KKKKKK0000000KKKKKKKKKKXKKKKKKKKKXXXX0OOl'.   ..,x000OOkxkkkxxxdodxk
0KKKKK0O0KK00000K0000000000000KKKKK0kdxO0K0OxdolcclxKXXNXXXXXXXXK0kl;..',. ...'...:kOkkkxxxxxkxdxkkk
0KKKKK000KK000000000000O000K000KK0o'.  .l0Kd:;,.   'ldddolc;,;;,'.      ;:,;;;,'.. ;xxxxxxxkkxxxkOOk
0KKK0OkO000000000000000O0000000K0:      .oKKKK0k,                       ..',;;;;,'':xOkxxxxxxkkkOOOO
KKKKK000000000000000000000000KKXx.       ;0K0KKKOoool,..                           .l0OkxxxxxxxkOOkk
KXKKKK000000000000000000OO000KXXc   ..   ;0KKKK0KXXXXX0Oxooooool:'                  oKOkxkkkxxkkkkkk
0KK0KK00000000000000000000000KXO,  ...  .dKKKKK0KKKKKKKKKKKXXXNNNXx.               .xKkkxkkkkkOOkkkO
0K0KK0000000000000000000000KKK0c. ......'cdOKKK00KK000000KKKKKXXXNO'               'k0kkkkkkkkOOkkOO
0K0K0000000O00000000000OO0KK0l.   ......   .'d00000000OO0KKKK0KKKNO.               ,OOkkkkkkkkkOkO00
0KK000OO00000OOOO0OO000Ok0KXk.   .........   .xKK0000000KKKKK00KKXO'               :OOkkxkkkkkOOkO00
0KK000OO000OOOOOOOOO000O000X0:   ..''.....    :0K00OO00000000000KX0;              .o0OkxxxkOkkOOOOO0
0K0000OOOOOkOOOOO0O0OO0000KKXO,  .........    ,OK000OO0000000000KXXl              .xOxxxxkOOOOOOOO00
0K00000OOOkOOOOO0000OkO0000KKXo.  ..........  .kK000OOO00O000O00KKXo   .';,'..    ;kxxxxk0000OOkkOOO
00O000OOOOOOOOOO00000OOOO00KKXk. ..........   .oK0K0OO0OOOO00000KXKc    .',:cc;::;okddxkO00OOOkkkkkk
0000OOOOOOOOOOO0O000OOOOO00KKXo.  ..........   c0KK0OOOOOOOO000KKKKc         ....lkxddxkO000kkxkkkkO
O000OOOOOOOOO000000OOO00000KXXc   ..........   ;OK00OOOOOOOO00KKKXK:    ...     ;kkxxxkkkOOOkkOOOkkO
O0OO00O00OOO0000000OOO00KKKKXK;   ..........   ,O0OOOOkxkkkO00KKKXK:    ',,,,...cOOkkkkxxkkkkkOOOkOO
OOOOO0000000000O000OO000KKKKN0'  ....... ....  ,k000OOkkkkkOOO000K0;    .;,,'.. ,k0OkkxddxxkxkkkOOOO
OOOOO00O00000OOOOOOkOO0000KKNk.   ....  ...... .kK00000OOOkkOkkkO0Oo'   ........cO0Okkxdxkxxxxxkkkkk
OOO000OOO0000OOOOOkOO00000KXXo.  ....''....... ,OK000000OOkkkxxxkO0X0,  .;;';oxOK0Okxxxdxxxdxxxkkxxk
OOO0000OO0000OOOOOOOOOOO00KXXo   ............  c0000KK000OOkkkxxO00KKo..:k0cc0K00kxxddxxxxxdddxkxddx
O00O00000000OOOOOOOOkOOOOO0KK:  ..........  .,:x000000000OOOkkxkOO00KO; 'oO:.d00Oxxdodxxxxxxxdddoccd
O0OO0OO0OO00O0OOOOkkkkOOOO0Kd.   ........ .,d000OO0000OOOOOOOOkkkOO0OOc..lO: :O0Oxdoodddxkxxxdll;';:
OOOOOOOOOOOOO0000OkkOOOOOO0O;     ...'.   cOO0OOOkkkOOkOOkOOOOkkOOkOkko..oKd..o00xdollloxxxxdl:,. ..
kkkO0OOOOOOOOOOOOkkOOOkOOO0Oocl;.  .cd.  .o0OOOOkxxxkxkkOkkO0kxxkkkxdo:..l00, ;OOdl;,;;;:clc,'. ....
kkkOOOkkOOkkkOOOOxkOOOOOOOO000Kk.   lx.  .o0OOkkxxxxxxxdxxxkOkxdxxdl:.   ;O0; 'xx:'',,..''....   ...
xdxkOkkOOkkkkOOOxxOOOOOOO000000k'  .dO'   l000Oxxkkkkxxxkxxxdocc:;'.     'xO; .do;;;;,,,c:.',,,,'..'
kkxkkkOOOkkOkOkkxxOOOkkOkkOOOkOd.  'kK:   c0OOOxooooolllc:;,',;,;;... .. .dx' .dl.',.';:;;:;;;,....:
O00000OOOOOOkkkkxxOxxxxkkkOOOkOl   'dd,   ;ddolc'......'''''.';;,,,,;',;..od. .oc....  ..';'..'....'
`;

const twoSkulls = `
                                           ................   .......                             
                  ..'...                ... ................  ..........                            
                 .;ddoc:;'.          ...,,'................................                         
                 .cddolodxxc'.       ..'''''................................                        
                 .cxxxoldk00kl,.   .....',,:;.................................                      
                 .cxxxoodk000kxo,..    ..,;;:,....................................                  
                 .cxxxdddxOKOkkkxl'     ..,;::......................................               .
                 .ckkxxddxO0OkkOOOx:.    .':cc'....................................            .....
               ...:xkxdooxkO0kxO00Okl.    .;c:'................................      ....      .....
     .....     ...:xkxxddkxx0OddxxkOOx,   .'c:.....................''...............................
.   .....  ......'lxkOkkOkkkkOkxxO00Okd;  .'c;.....................'..........,cl;. ................
................'cdxkxkkxxkOOkO0Okkkxxkx, .,c'....................'...'...,clccc:'..................
................;loxddooddxk0kddkkxkOOOOl..;,.....................'...'',:cllc::,...................
................'cdddllcccoxkkxxkOkO0kkOo..'.........',:::;,'.....'...;;cc::c::;....................
.................:ddxoc;:cldkkkkkkkOOkdoc,'.    ..,;ldxkkkkxdoc:,''..;::;;:c;;;'....................
..................;okxlclloxkkkkkkxdxdooloc.  .'codxxk000OOOOkxdoc;,,:c::cc:;,'.....................
....................;cldkkkkxxxxxxddooodl:'.  .lkOOO00000000Okxdoc:;'.,:::;:::,.....................
......................';clodxxdddddol::;. ....;dO000KK00OOOOkdlc:;;;;'....',;:;'....................
...........................,odolllc::,,'..,:codk0KKKKK000Okkxxolc:,,:c,.. ...','....................
....................... ..,okkkOkxk0KK0ddOKKK0O0KKKK000OOkkxxxooolc,,::,.     ......................
................'........'lxkkkkO0KKKKK00KKKKKKKKKKKK00Okkxxxdc:lc::;,,''.    ......................
................,:c:'....:ddxOkkO0KK000000KKKKKKKKXXKKK0Okxdollllc:;,;,...  ........................
..................,looc';ddoxOkkO000OOOOO000KKKKKKKKKK0OOkxdollolc:;;,..''..''......................
....................'cxxxxolkOkOOOOkkOO00000OOOO00000K00Okxxdlcllcc:;;..;'...'......................
......................':oxddOOkOOOkxdddxxkOOOkkkkOOOOkxdlloxdlllc:;;;;'... .......... ..............
........................:dkOOOOOxoooooddxxkkkkxxxkOkxxo::ldxdddocll:,'...   .......  ...............
'''.....................;xOxo:,...    .':oooodxxxdddol;'.'loccc:;;;;::.     .''...  ................
''''....................,dd;.           .:lclkK0xol:'..   .....   .;od,     .'..   .................
''......................'od;..........   ;xxxO0Oocc:'.    .'.  ...',ll'     .... ...................
'''.................;c;..cOd;::,,;:::;'. 'xkk00Ooc:;'..;c',o;  .:::cdl.     ..  ....................
''''.'''...........,ldxo';Ok:col::c::c;..:O0Od:llcc:;,',ll,;:. .,codko'.       ....''..............'
'''''.............,cdkkxc;xOocll;,;:cllldO00d. .cooc:clc:cc;:;..cdxkOl,.      ...''''.............',
'''''''...........;coxdoolx0Okxo,..'oO00000k;  ..,;:;:dkkxdlc,.'cxO0xc;.    .....'''.''''''...''''',
,''''''..........'clloooollxkOko,..'oxO000x'  ...  .;;cddxxkkdoodkkdl:,.   .'...''''''''''''..'',,,,
,'''''''.........'cllldolc:cdd;.... .:xO0x'  .'. .''',:c::::lllooolcclc,''....',,,,,''''''''''',,,,,
,'''''''..........';lolollcc:'.. .. .:xkOl.  ,c. ,l,.,cllllllllllollc:c:,,...';;;,,,,,''''',,,,,,,,;
,'''''''..''........;loddoo:....  . .oOO0k:..cdc',:cccddlclcllllo:'..,:,....,;;;;,,,,,,,,,,,,,,,,,,,
,,''',,,''''''......':clodl'.. . .. .dO0000Okxdoodxdoxkocc:cool:..    .   .,;;,,,'''''''''''''''''''
''',,,,,'''''''''''.';;cl:'.   . .;,.,dO0000K0xkkOKOxOKdc:;cc;.           ..........................
,,,,,,,,,,,',,,,,,,,,;;;,....... .co..;k0000K00KOO0Oxkkl,',;;.                                    ..
,,,,,,,,,,;;,,,,;;;;;;:;'.',:'.  .:o;..okk0xO0dk0dokkcdl......    ...                               
,,,,;;;;;;;;;;;;;;::ccc:,;cl;'...,oxo:.lkk0xO0lxKdcxkdko'.....   ..'.                               
,,,,,;;;;;;;;;::::cclllllooc,,;..cokxc;:cddodocloc:cc::,.''...  .,:,                                
',,,,,,,;;;:::::::ccclllloolclo::odddooc;ccccc;;:,',:,''..... ..;lc.                                
,,,,,;;;;:::::::ccclllllloooodddxxddddddddddooololc:;ccc:;,,:,'':l'                                 
,;;;;:::::cc::ccllllcloooloooodxkOxddddddddddddoool;.co::;;;:;'':;.                                 
:::::::cccllllllloolllollooooooodxdodxxdddxxxxxddoo:,ldc::clc;;;;'                             ...  
ccccc:cccccclllllooooooooooooooooxdooooodxxkxdooolc;,lxol:;::;,;;.                     ...   .......
llcccccccllcccclllllllooooolllllodxxooolooodxdc',,,,:lolc;,;;::;'             .','''..'''.....,,,'',
loolllc:cllllllllllllllllllooooodddoodolcccclc,;oddddoodlc:;;;..      ..''..',;;;;,'',,,,'''''''',,,
ccclllllcccclllllllllllllcclllooollooooc::::;;;lxddlc:;,'.....'',',,,,;;::;;;;,,,,,,,,,;;;,,,'''''''
lllllloolllllcc::cccllcccccccllllllooollloolllcc:;;;,,,,::,;ccccclc:::;;;;;;;;;;;,,;;;;;,,,,,,,,''''
llllllccccccccc::;;;;;::::cccccccccccllllooollccccccccc:::;::::::::;;::;;;;;,,,,,,,,,,,,'''''''',,,'
:::::::::::::::::::::::::::;;;;;;,;;::::cccccc::ccccccc:::::;;;;;;;;;;;,,,,,,''.'','''''''..........
l:,,;;;::::::;;;;::::;;;;;::;,,,''''',,;;:::c::::::::::::::::;;,,,,,,,'',,,,'''.........'...........
cc:;;,,;;;;;:::::::;;;,,,,;;,,,,,,,,,;;;::::::;;;;;;,,,,;;;;;;;,.',,',,,,'''''.''...................
;:::::;;;;;::::;;;;;;;;;;;,,,,',,,,,,,,;;;;:;;,,;;;;;,,,,,,,,,''..'',,,''........'................
`;

const ouroboroStar = `
                                                            
                                        .''......................                                   
                                  ......',,'.........     ..'''''......                             
                              ....'''.....................................                          
                          ........           ..  ......... ...................                      
                        ..'...                                   . .........'....                   
                    ........                                         ..........''...                
                 .......   .                                            ...'...'.'''.               
               .......     ..                                         .............'''.             
              ....'.        .  ..                                   ..  ..   ......'''''.           
            ....'..         ..  .. ..                           .....  ..      ....'''''''.         
          ..'..'.            .   . .....                     .......   ..        ....'''.''.        
         .'..''.             ..    ........                ........   ..          ....'''''..       
        .'....                ....  .........          ............  ...            .''''..''.      
       .'....                 ...  .............     ..............  ..              ..''..'...     
      ..'','.                  ..  ....................... .... ..  ..                ....'..''.    
     .''..'.                   .'.  ..  ......''......'. .... ...  ...                 ......''..   
    ..''''.                     .'.  ..   .......   .......  .'.   ..                   .....'...   
    .'.',..                      ..   ......'.         .... ...   ..                     .........  
    .'.''.                        ..  .,'.....         ..  ..'.  ...                      ........  
   .'.'''.                        .'..',. ...             ...''..'.                       .....''.. 
   .'..,'.                      ...,'..'.  .'.  ..      ...  ....,..                      ....''... 
  .'...'.                     .... .'.'.    ...  .'.  ....    .''......                   ....''''. 
  ....''.                  .....  ..,'.       .. ... ..        .'.........                 ...'.... 
  .''.','.              ...............    ..  ..   ..  ...   ... ...........               ..'..'. 
   .'..'..           ...................   ....       .....  .,.... ...........             ....''. 
   ...'''.         ......................  .....     .....  .........    ........          ......'. 
   .'.'',.      ........ ...............'.   ...     ..    .'...  ...        ........      .....''. 
   .''''''.  ......................    .''.   ..     ..  .....    ..... ...  ..........    ........ 
    .'''.'...''.........................'... .'......'...,'........................................ 
    .''''''..                  .  .    ..'......    ... .....               ...          ....'..'.  
    .''''.''                             .... ..     .  ....                             ....'.',.  
     ...''''.                            .'...         ....                             ....''''.   
     ..'.''''.                            ....        .....                           ......''.'.   
      .'..,'...                            ....      .....                           ....'''''..    
       .''''.....                          ....      ....                           .....''....     
        .''...','.                          ..  .....  ..                          .......'...      
         .''...'.'..                         .. ...   ..                         ..........'.       
           ......'''..                       ....... ...                       .......'''...        
            .........'..                      .........                      .......''.',.          
              ..........'.                     ..   ..                     .........''...           
               ..'...........                  ... ...                  ......'''''''..             
                 ..''.... .''.....              .'...              ..  .....''.'''...               
                    .'''...........'...         .',.         .....................                  
                      ..''.......................',........................''..                     
                         ........................',....'...............','...                       
                             ...........'......'..'.'''''.'''............                           
                                 ............''..''''''',,'.........                                
                                            ................                                        
                                                                 
`;

const ouroboro = `                                                                            ';',cll,                                                                
                                                                           .'lxl,;l;'::'                                                              
                                                                    .,:c:;oOx:',,,ccldkO,                                                             
                                                                  .dxdkOK0dolc,,cokkxlod'                                                             
                                                                .;xxdoxkkkxo:,;lldXWk,.c;                                                             
                                                            ..;oxod0OdxOdc,,';l:.'xXOd,,;.                                                            
                                                       .,,;xOOkoc;:dxdool''::ckOc.oX0K0xl;''.                                                         
                                                  .;;cokKkOOxxdool:ooclc,:ddxkXNkckN0dxxdoddo:,..                                                     
                                             .:c,,xxodx00xOkoxolkK0kxc':dodx0Kxooodxc:oolcloox0KOl,''..                                               
                                         .,ccxkllooOXxlOOOX0OXKlcl:;.'oO0kxdkxdodxkOOOOdokkkkkxxkollclol;..                                           
                                     .,:okOl,xOdOklddoOXOx00xdlldlcxxdxkdldkxddddkKWXKK0K0dllcoxdddolc:cdo::,.                                        
                                   .:kdcodx::OxlkOxOxdkd:clooclooloxK0x0OONN0c:xOod0dcc,:ooloxccccdd:cdc:oolc::,                                      
                               ..;::oo;dkdkc:Oxlkd;ok:;;.;c;:;':cx0oxK00K0KXKO0KKkxkklc;:c,,;;ckd;:o::l;;:lolc:l:;'                                   
                             ',;dOllk::d;;o'.l0ddxlodc:;'',;..:oolkxOWWWWWWWNXNWWW0xc. ...':lcll;:xkldo;oc;ddoclc;l:,.                                
                           .;llxXklxo,oo;do,ckOo,;:;;;lc:':l..;,cxxx0NWWWWWWWNXNWXxc.        ..,:lddxxc;ol:ooccco::l:o:.                              
                        .;;lddcxXxcdlcxo:k0xo,';,;,.   ...:x'.::odoookNWXNWWWNKXWXdc.            ..':c;:,:dl::l;clcdc::c:.                            
                      .':::d0xoxd:lxc:okxo,',.,,           .;lo''oollokKNWWWWXKNMNko'                 .,:lc..od:do,cl:;cko,                           
                    .cc;;clxOlcxd;cxl:;.':'''                .'',:loclkkO00XN0dKWW0o'                    .,;;;lc:ddd:,c:::od,                         
                   ,xc':ll;lx,;xl;do..'.''.                        .,;,ldldO0o:0NNKd'                       .'::,';xd:loclcdkc.                       
                 .ccll;;;c:;d,.lOl.,.';.                             'c::,:dl;lkdddo'.                         .;:,'ckl:ddllkxl.                      
                'oxcdl':,;c';loc;. ;c'                                .,:dl,,',cc:cc;;'..                        .:c,;oxl::;c:od'                     
               :xl,;occo:co;,c' ,o,.                                     ,dxo::ccclc:;'.'...                      .cx:,oxddddlllo:                    
             .lcl;.;o;.dd..ol.,lo;.                                             .''..   ..,c;.                      .oo;cdlooooclc;.                  
            'dx:::.,lc:oddoo;.;c.                                                         .'::.                      .cx:,okollc:;oc.                 
           'ol;..c;.'dl.:xo',lc.                                                           .;:'                       .co,.od,:l:lcol.                
          'l,.,;.'::ccdOx,.;;'                                                             .,;'                         lo..cxlldc:dxc.               
         .lc'.;o:'':,.dk. .l;                                                             .,;;.                         .do..coldl:lok:               
         ';.;:','..cdxx,.;;'                                                             .:ll;.                          .ll'.oo'oo:ldxc              
        'c,';c. .c;.,o' .l;                                                             .o:.cd,                           'd:.,dc:lc;cdx:             
        co''..cc;ol:xc...'.                                                             'o'  ;;                            ck'.oo;oo;;;dk'            
       .do..c:':l; :k;.,:'                                                                                                 'd:.;Oo:xc,okO:            
       .olc,',,';:,ol'.:;                                                                                                  .ll'.oOllldlldd'           
       :d,cx:.;l;'lx' ;d,                                                                                                   ;Oc.,xocdlcllOc           
       :l;,:lc;;c:xk,'cc.                                                                                                   'ko..xx.;ll::xl.          
      .l:.;;.,xx,,Ox.;xc                                                                                                    .oo..cOcclooldl.          
      .oo'..,,cxolkc.'l;                                                                                                     ,xc..oo:ddl:lo.          
      'oc',' .lo.,x:.':.                                                                                                     'do;.:x::oolll'          
      'l:'..''ld;dO' .;'                                                                                                     'xd;.;Oolc:xxo,          
      'oolc'.;x:.lk;.co;                                                                                                     ,xc'.:O:.ld:ckl          
      .:cdo;',:o:dO;.'cl.                                                                                                    ;kl..l0o,,cdcco.         
      .ddll:'.cc.,k; .;:.                                                                                                    :k:'.ld':d:'l0c          
      '0d.;,',co,,dl.  ,:.                                                                                                   :ko:o0xccld:;x:          
      .ollc,''lx, :O: .;:.                                                                                                  .ld:.o0;'oc:occ,          
       ;o:okl;;cd,'dl.  'c.                                                                                                .::;';Oxclcdl;ld'          
       ,dl::loodd,.cKo..:c.                                                                                               .ld;.,kO;;dl;c:lc           
        :o;;;'ol;dl'ck:..c;                                                                                               ;x; .ldcl;:xc'ld.           
        .:;,,cc,;l:.:0x..,;;.                                                                                            .,'.'dkdloo,,oc::            
         ;c';c'cd,:l,'lo' ,oc.                                                                                          ;l' .lo'cl.co',dc             
         .:;,,'c:.,c,.:Xo...,o'                                                                                       .;c,.,dxoc:ll;oc.l:             
          .:;.;oc::'c:,lxc. ;o,                                                                                      'oo' .ld',l;;kocdd:.             
           .lc;,okolo;. cK: ...,.                                                                                   ,xl...odclloc.cO;;o.              
            .ll.,o:ll,cl:cdo. .,,;.                                                                               .,;:'.'oO;'ollo'c0d;.               
             .ll;;;:,.,l, ,xl.  'cc:.                                                                           .'ol.',:dodocdc:l'.kx.                
              .od',;.',',cc:od'   'dc..                                                                        'oo;'.;dkl.c;,olldcoo.                 
               .cl::,;c,.:c..oOl. ...l;..                                                                    .;oc:c',oloo;c;.ol:kx;                   
                 ;o:;cc,,;;;ldokx:. .. ;:..                                                                ..;c,..:xOc.;;'o;,kold,                    
                  .;:;',c, .;, .dNk;'.  .,c:'                                                            .;o;...;oklll;dc.o;'xx;                      
                    ,docdo;',. .llokOc'. ...:...                                                      .,oc..'.'lKO:,:;ld,'ol:l,                       
                     .clcl;.ll';o:.:OO0x.   ..;:''.                                               ..',cc;:c;:kd;:o,:c:dl,cxx,                         
                       .:kl'll'cko.'c,,cxx' ';.  ;o;,,.                                         ..;:..';';kxdOc,:;:l,:xddxo,                          
                         ,ooodlcdo,'oo',dxokd' ..'. ,o;;c'.,'....                     ....';' .;.    'loldk:;clo;.c:.cxl'                             
                          .,:ll''::,,c;.:cckx:oxc;,'''..;..l;.;ldoc:;,;,'';;;coc.'c,.coc:,',;. ...:dloOo':lc:':x:cd,';,.                              
                             .cooodc';;.'odlc'oo;:lxdccc. ..   ',.'c:,ccc:co:,:;. '. .'..;codoloocd0o':ddOo;:.cd:ll.                                  
                               .';odolccccccc,,:,',,o0Ol;ldc;;:,.  ..   ...,.   .',;:cdllx0Ol:dk:':ooodlcxl,;,lo;.                                    
                                   .,:;cl:,cdl:l::kk,,lc.cxlkXklcoxdccoc,lxxl;ccdklxKoxO:;do;'locdo;;,cc;l:lo:.                                       
                                      .;::clodccdxdoo::lccc:co;.;OO:x0ldKd;;o0x:oo;oockkdl;llll;ol,l;cklol;,.                                         
                                          .,clccllc;';,,;,..:c::llcllll:,:ccc:::c;::,cccl;c:,dc,ccxOdoc;'                                             
                                               .;:ldlccc:c:;;cl,co;lo,;c,'::co:':c,;cc,'cdclOd;c:;:,.                                                 
                                                   ..,;:c:,:odo,,:ldolodllxxdc:oo:lkl;:;c;':,..                                                       
                                                            ...  ..;c:;;::;,,;;,....                                          `;

const keys = `                                       
                        .,coxxxxxxxoc'                         
                     'okkko:,....',cdkkl.                      
                   .d0xc,.           .;x0o.                    
                  ,OO;                  :0k.                   
                 .O0'                    ;Kx.                  
                 lNc                      oX:                  
                .xK,                      :No                  
                 oX:.....                 lNl                  
               ,;cKx:kKK0Odc.            .O0'                  
            .:ONNooKxl0WWMMMXx, ..'',,,'.:k;                   
           .xWMMMNdlOOoloxXMMMXoc0NWWWWN0o'                    
          .kWMMMMMWk;lO0k:lNMMMNd:o0WMMMMWk.                   
          cNMMMMMMMWd..';:xWMMMMK, ;XMMMMMX;                   
          oWMMMMMMMMWKOkOXWMMMMMX:;ONMMMMMN:                   
          :NMMMMMMMMMMMMMMMMMMMMOcOMMMMMMMWl                   
          .dWMMMMMMMMMMMMMMMMMMXooNMMMMMMMMd                   
           .xWMMMMMMMMMMMMMMMMKodXMMMMMMMMMx.                  
           .kWMMMMMMMMMMMMMW0xoONMMMMMMMMMX;                   
          .kWMXKWMMMX0OOkddxxONMMMMMMWNKOo'                    
         .kWMKx0WMMNc     .;:oXMMMMMMK:.                       
        .OWMKx0WXOko.        .lXMMMMXl.                        
       .OWMKx0Xx,              dMMKKK,                         
      .OWMKxOk,                lWMOkX:                         
     'OWMKx0Wl                 :NM0xXl                         
    'OMMKx0Wk'                 ;XMKxKo                         
   'OWMKx0XO,                  '0MXx0d                         
  'OMMKx00;                    .OMNxOk.                        
 'OMMKxKWO.                    .xMWkOO.                        
 :NMKxKMk.                      dMMOkK,                        
 .dXOddl.                       lWMOkX:                        
  ...                           :NM0xXc                        
                                ;XMKxKo                        
                                '0MNKKl                        
                                       ':::,.    
`;
export { eyeAscii, hundredEye, shots, twoSkulls, ouroboroStar, ouroboro, keys };
