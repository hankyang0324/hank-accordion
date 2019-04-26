# Instruction

This is an accordion and a section element for expansion and collapsing in Angular.
It works just like https://getbootstrap.com/docs/4.3/components/collapse/#accordion-example.

# How to Use

1.run npm i hank-accordion 

2.import HankAccordionModule from 'hank-accordion' to app.module.ts.

3.in your component:
```
<hank-accordion>
    <hank-section title="Tital A">
        This is Content A 
    </hank-section>
    <hank-section title="Tital B">
        This is Content B
    </hank-section>
    <hank-section title="Tilte C">
        This is Content C. 
    </hank-section>
</hank-accordion>
```