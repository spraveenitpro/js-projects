import Post from './Post';

const meta = {
    component: Post,
    title: 'Components/Post', // Optional: add a title for better organization in Storybook
};

export default meta;



const Template = () => (
    <Post content=" I’m Working in figma designing a new website that shows all my tweets!." date="2021-09-28" />
);
export const Default = Template.bind({});

