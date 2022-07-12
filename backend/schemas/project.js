export default {
  name: 'Project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'order',
      title: 'order',
      type: 'number',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'reference',
      to: [{type: 'category'}],
    },
  ],
}
