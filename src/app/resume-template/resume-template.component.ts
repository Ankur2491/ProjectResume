import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-resume-template',
  templateUrl: './resume-template.component.html',
  styleUrls: ['./resume-template.component.css']
})
export class ResumeTemplateComponent implements OnInit {

  // @ViewChild('mainContent') mainContent: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  export(){
    // const options = {
    //   fileName: "resume.pdf",
    //   image: {type: 'jpeg'},
    //   html2canvas: {},
    //   jsPDF: {orientation: 'portrait'}
    // };
    // const content: Element = document.getElementById('mainContent');
    // html2pdf()
    // .from(content)
    // .set(options)
    // .save()
    // var element = document.getElementById('mainContent');
    // html2canvas(element).then((canvas)=>{
    //   var imgData = canvas.toDataURL('image/png');
    //   var doc = new jspdf('p','mm','A4');
    //   var imgWidth = 208;
    //   // canvas.height = 1000;
    //   var imgHeight = canvas.height * imgWidth /canvas.width;
    //   doc.addImage(imgData,0,0,imgWidth,imgHeight);
    //   doc.save('image.pdf');
    // })

    html2canvas(document.querySelector("#mainContent")).then(canvas=>{
      var pdf = new jsPDF('p','pt',[canvas.width,canvas.height]);
      var imgData = canvas.toDataURL("image/jpeg",1.0);
      pdf.addImage(imgData,0,0,canvas.width, canvas.height);
      pdf.save('sample.pdf');
    })

  }

}
