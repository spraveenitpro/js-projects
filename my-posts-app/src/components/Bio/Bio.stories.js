import Bio from './Bio';

const meta = {
    component: Bio,
    title: 'Components/Bio', // Optional: add a title for better organization in Storybook
};

export default meta;



const Template = () => (
    <Bio
        headshot="https://pbs.twimg.com/profile_images/1485632175932383235/8t0DGo6V_400x400.jpg"
        name="John Doe"
        tagline="Helping people with their finances"
        role="Financial Advisor"



    />
);
export const Default = Template.bind({});

