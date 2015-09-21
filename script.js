$(function() {

  var cNote = document.getElementById('cNote');
  var dNote = document.getElementById('dNote');
  var eNote = document.getElementById('eNote');
  var fNote = document.getElementById('fNote');
  var gNote = document.getElementById('gNote');
  var aNote = document.getElementById('aNote');
  var bNote = document.getElementById('bNote');

  $('#c').on('click', function(){
    cNote.currentTime = 0;
    cNote.play();
  });

  $('#d').on('click', function(){
    dNote.currentTime = 0;
    dNote.play();
  });

  $('#e').on('click', function(){
    eNote.currentTime = 0;
    eNote.play();
  });

  $('#f').on('click', function(){
    fNote.currentTime = 0;
    fNote.play();
  });

  $('#g').on('click', function(){
    gNote.currentTime = 0;
    gNote.play();
  });

  $('#a').on('click', function(){
    aNote.currentTime = 0;
    aNote.play();
  });
  
  $('#b').on('click', function(){
    bNote.currentTime = 0;
    bNote.play();
  });
})