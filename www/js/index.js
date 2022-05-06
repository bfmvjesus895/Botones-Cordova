/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    //console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
    /*document.querySelector("#btnEntrar").addEventListener("touchend",
             function(){
                 var correo = $("#inputEmail").val();
                 var pass = $ ("#inputPassword").val();

                 if(correo == "micorreo@correo.com" && pass == "1234"){
                     window.open("producto.html");
                 }
                 else{
                    alert("Datos incorrectos", null,"Aviso", "OK");  
                 }
             },false);*/
            document.querySelector("#btnComprar").addEventListener("touchend",
             function(){
                 alert("Apple Watch SE 40 mm Blanco Estrella. Precio $9,999", null, "Descripcion", "ok");
             }, false); 
             document.querySelector("#btnComprar2").addEventListener("touchend",
             function(){
                 alert("Apple Watch Series 7 41 mm (Product)RED. Precio $11,299", null, "Descripcion", "ok");
             }, false); 
             document.querySelector("#btnComprar3").addEventListener("touchend",
             function(){
                 alert("SMARTWATCH APPLE WATCH 38MM ALLUMINIO MJ2U2J/A SPORT CINTURINO SILICONE VERDE. Precio $9,233", null, "Prueba ", "ok");
             }, false);  
}


    
               
                        

