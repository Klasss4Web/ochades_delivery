export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
      vlidation: (Rule) => Rule.required(),
    },
    {
      name: 'short_descripion',
      type: 'string',
      title: 'Short description',
      vlidation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Restaurant',
      // vlidation: (Rule) => Rule.required(),
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of the Restaurant Restaurant',
      // vlidation: (Rule) => Rule.required(),
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude of the Restaurant Restaurant',
      // vlidation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      type: 'string',
      title: 'Restaurant address',
      vlidation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter a rating(1 to 5)',
      vlidation: (Rule) =>
        Rule.required().min(1).max(5).error('Please enter aValue between 1 and 5'),
    },
    {
      name: 'type',
      title: 'Category',
      vlidation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
      
    },
  ],
}
