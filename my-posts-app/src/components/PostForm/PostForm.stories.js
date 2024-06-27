import PostForm from './PostForm';

const meta = {
    component: PostForm,
    title: 'Components/PostForm', // Optional: add a title for better organization in Storybook
};

export default meta;



const Template = () => (
    <PostForm />
);
export const Default = Template.bind({});

