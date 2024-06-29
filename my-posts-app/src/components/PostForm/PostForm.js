import styles from './PostForm.module.scss'
const PostForm = () => {
	async function handleOnSubmit(event) {
		event.preventDefault();
		const content = event.target[0].value;
		const newDate = new Date().toLocaleDateString();

		const data = {
			content: content,
			date: newDate
		};
		console.log('Data that is being posted: 🚀');
		console.log(data);

		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});
			const result = await response.json();
			console.log('Success:', result);


		} catch (error) {
			console.error('Error:', error);
		}




	}
	return (
		<>
			<form onSubmit={handleOnSubmit}>
				<textarea className={styles.formContent}></textarea>
				<button className={styles.formButton}>Add new Post</button>

			</form>
		</>
	)
}

export default PostForm
