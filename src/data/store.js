import {reactive} from 'vue'

export const store= reactive({
    elements:
                [
                    {   
                        argument: 'Business Growth',
                        title:'Increase Brand Awareness',
                        mainText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.',
                        // images:'../assets/imagesNotDinamic/pippo.png',
                        
                    },
                    {   
                        argument: 'Investors In People',
                        title:'In-House Sales Training',
                        mainText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.',
                        // images:'../assets/imagesNotDinamic/image1.png',

                    },
                    {   
                        argument: 'Social Media Analysis',
                        title:'Harness Your Social Proof',
                        mainText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.',
                        // images:'../assets/imagesNotDinamic/image2.png',

                    },
                ]
})