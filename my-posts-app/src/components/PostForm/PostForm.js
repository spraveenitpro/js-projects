import styles from './PostForm.module.scss'
const PostForm = () => {
	async function handleOnSubmit(event) {
		event.preventDefault();
		const content = event.target[0].value;
		const newDate = new Date().toLocaleDateString();

		const data = {
			"records": [
				{
					"fields": {
						"Content": content,
						"date": newDate
					}
				}
			]
		}

		try {
			const response = await fetch(`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/Posts`, {
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
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
