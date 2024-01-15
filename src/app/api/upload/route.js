export async function POST(req) {
  const data = await req.formData();
  if (data.get('file')) {
    // upload your file
    const fileName = data.get('file').name;
    console.log('We have the filename', fileName);
  }

  return Response.json(true);
}
