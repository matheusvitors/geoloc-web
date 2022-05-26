
const useHeaders = async () => {
    const token = localStorage.getItem('@token');
	const header =  { headers: { "token": `${token}` }};
	return header;

}

export default useHeaders;