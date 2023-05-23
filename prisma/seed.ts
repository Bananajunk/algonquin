import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const stories = [
  {
    title: "Where's my Yankees cap!?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida, tellus ac feugiat dictum, ante erat tempor odio, sed sagittis diam leo in turpis. Nunc rhoncus, lorem sit amet mollis luctus, purus libero varius velit, lacinia vehicula felis tortor ut lacus. Pellentesque metus dolor, ullamcorper eget eleifend ultricies, dignissim quis odio. Donec ut consequat turpis. Nunc ligula nisi, pretium faucibus augue nec, pellentesque pretium magna. Mauris commodo, felis eget feugiat pharetra, libero velit consectetur nunc, sed consequat velit erat sed metus. Mauris sit amet lacus iaculis nulla venenatis scelerisque. Praesent feugiat ligula purus, non lobortis mi laoreet id. Nam auctor dapibus mi. Curabitur orci ipsum, gravida et malesuada sit amet, consequat eget mauris. Integer finibus venenatis lorem, ut egestas quam blandit eu. Fusce non pretium lacus, quis feugiat nisi. Sed non sapien sed arcu semper dapibus quis vitae ligula. Nunc vehicula, quam sit amet ultrices aliquam, eros quam finibus leo, eu elementum est ligula pulvinar leo. Morbi sit amet sem vehicula, ornare nulla vitae, facilisis orci. Praesent non laoreet lectus. Duis fringilla nulla commodo nisl euismod, nec porta mi mollis. Quisque in ipsum eu urna imperdiet aliquet. Ut fringilla a elit at pharetra. Maecenas nec nisl in arcu ultricies semper at vitae nisi. Praesent facilisis nec nulla pretium tristique. Vestibulum quis massa sed felis rutrum facilisis. Quisque id arcu eu tellus lobortis tempus. Aliquam erat volutpat. Suspendisse blandit lacus vitae ipsum ultrices porttitor. In a faucibus ante. Etiam non nibh urna. Curabitur faucibus turpis vel sagittis cursus. Vestibulum egestas lorem sit amet neque tempor malesuada. Integer sodales vitae nibh at sollicitudin.",
  },
  {
    title: "Twice daily",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida, tellus ac feugiat dictum, ante erat tempor odio, sed sagittis diam leo in turpis. Nunc rhoncus, lorem sit amet mollis luctus, purus libero varius velit, lacinia vehicula felis tortor ut lacus. Pellentesque metus dolor, ullamcorper eget eleifend ultricies, dignissim quis odio. Donec ut consequat turpis. Nunc ligula nisi, pretium faucibus augue nec, pellentesque pretium magna. Mauris commodo, felis eget feugiat pharetra, libero velit consectetur nunc, sed consequat velit erat sed metus. Mauris sit amet lacus iaculis nulla venenatis scelerisque. Praesent feugiat ligula purus, non lobortis mi laoreet id. Nam auctor dapibus mi. Curabitur orci ipsum, gravida et malesuada sit amet, consequat eget mauris. Integer finibus venenatis lorem, ut egestas quam blandit eu. Fusce non pretium lacus, quis feugiat nisi. Sed non sapien sed arcu semper dapibus quis vitae ligula. Nunc vehicula, quam sit amet ultrices aliquam, eros quam finibus leo, eu elementum est ligula pulvinar leo. Morbi sit amet sem vehicula, ornare nulla vitae, facilisis orci. Praesent non laoreet lectus. Duis fringilla nulla commodo nisl euismod, nec porta mi mollis. Quisque in ipsum eu urna imperdiet aliquet. Ut fringilla a elit at pharetra. Maecenas nec nisl in arcu ultricies semper at vitae nisi. Praesent facilisis nec nulla pretium tristique. Vestibulum quis massa sed felis rutrum facilisis. Quisque id arcu eu tellus lobortis tempus. Aliquam erat volutpat. Suspendisse blandit lacus vitae ipsum ultrices porttitor. In a faucibus ante. Etiam non nibh urna. Curabitur faucibus turpis vel sagittis cursus. Vestibulum egestas lorem sit amet neque tempor malesuada. Integer sodales vitae nibh at sollicitudin.",
  },
  {
    title: "It should make my eyes water",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida, tellus ac feugiat dictum, ante erat tempor odio, sed sagittis diam leo in turpis. Nunc rhoncus, lorem sit amet mollis luctus, purus libero varius velit, lacinia vehicula felis tortor ut lacus. Pellentesque metus dolor, ullamcorper eget eleifend ultricies, dignissim quis odio. Donec ut consequat turpis. Nunc ligula nisi, pretium faucibus augue nec, pellentesque pretium magna. Mauris commodo, felis eget feugiat pharetra, libero velit consectetur nunc, sed consequat velit erat sed metus. Mauris sit amet lacus iaculis nulla venenatis scelerisque. Praesent feugiat ligula purus, non lobortis mi laoreet id. Nam auctor dapibus mi. Curabitur orci ipsum, gravida et malesuada sit amet, consequat eget mauris. Integer finibus venenatis lorem, ut egestas quam blandit eu. Fusce non pretium lacus, quis feugiat nisi. Sed non sapien sed arcu semper dapibus quis vitae ligula. Nunc vehicula, quam sit amet ultrices aliquam, eros quam finibus leo, eu elementum est ligula pulvinar leo. Morbi sit amet sem vehicula, ornare nulla vitae, facilisis orci. Praesent non laoreet lectus. Duis fringilla nulla commodo nisl euismod, nec porta mi mollis. Quisque in ipsum eu urna imperdiet aliquet. Ut fringilla a elit at pharetra. Maecenas nec nisl in arcu ultricies semper at vitae nisi. Praesent facilisis nec nulla pretium tristique. Vestibulum quis massa sed felis rutrum facilisis. Quisque id arcu eu tellus lobortis tempus. Aliquam erat volutpat. Suspendisse blandit lacus vitae ipsum ultrices porttitor. In a faucibus ante. Etiam non nibh urna. Curabitur faucibus turpis vel sagittis cursus. Vestibulum egestas lorem sit amet neque tempor malesuada. Integer sodales vitae nibh at sollicitudin.",
  },
  {
    title: "Pudge get me a pint...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida, tellus ac feugiat dictum, ante erat tempor odio, sed sagittis diam leo in turpis. Nunc rhoncus, lorem sit amet mollis luctus, purus libero varius velit, lacinia vehicula felis tortor ut lacus. Pellentesque metus dolor, ullamcorper eget eleifend ultricies, dignissim quis odio. Donec ut consequat turpis. Nunc ligula nisi, pretium faucibus augue nec, pellentesque pretium magna. Mauris commodo, felis eget feugiat pharetra, libero velit consectetur nunc, sed consequat velit erat sed metus. Mauris sit amet lacus iaculis nulla venenatis scelerisque. Praesent feugiat ligula purus, non lobortis mi laoreet id. Nam auctor dapibus mi. Curabitur orci ipsum, gravida et malesuada sit amet, consequat eget mauris. Integer finibus venenatis lorem, ut egestas quam blandit eu. Fusce non pretium lacus, quis feugiat nisi. Sed non sapien sed arcu semper dapibus quis vitae ligula. Nunc vehicula, quam sit amet ultrices aliquam, eros quam finibus leo, eu elementum est ligula pulvinar leo. Morbi sit amet sem vehicula, ornare nulla vitae, facilisis orci. Praesent non laoreet lectus. Duis fringilla nulla commodo nisl euismod, nec porta mi mollis. Quisque in ipsum eu urna imperdiet aliquet. Ut fringilla a elit at pharetra. Maecenas nec nisl in arcu ultricies semper at vitae nisi. Praesent facilisis nec nulla pretium tristique. Vestibulum quis massa sed felis rutrum facilisis. Quisque id arcu eu tellus lobortis tempus. Aliquam erat volutpat. Suspendisse blandit lacus vitae ipsum ultrices porttitor. In a faucibus ante. Etiam non nibh urna. Curabitur faucibus turpis vel sagittis cursus. Vestibulum egestas lorem sit amet neque tempor malesuada. Integer sodales vitae nibh at sollicitudin.",
  },
  {
    title: "...Luke hold my beer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida, tellus ac feugiat dictum, ante erat tempor odio, sed sagittis diam leo in turpis. Nunc rhoncus, lorem sit amet mollis luctus, purus libero varius velit, lacinia vehicula felis tortor ut lacus. Pellentesque metus dolor, ullamcorper eget eleifend ultricies, dignissim quis odio. Donec ut consequat turpis. Nunc ligula nisi, pretium faucibus augue nec, pellentesque pretium magna. Mauris commodo, felis eget feugiat pharetra, libero velit consectetur nunc, sed consequat velit erat sed metus. Mauris sit amet lacus iaculis nulla venenatis scelerisque. Praesent feugiat ligula purus, non lobortis mi laoreet id. Nam auctor dapibus mi. Curabitur orci ipsum, gravida et malesuada sit amet, consequat eget mauris. Integer finibus venenatis lorem, ut egestas quam blandit eu. Fusce non pretium lacus, quis feugiat nisi. Sed non sapien sed arcu semper dapibus quis vitae ligula. Nunc vehicula, quam sit amet ultrices aliquam, eros quam finibus leo, eu elementum est ligula pulvinar leo. Morbi sit amet sem vehicula, ornare nulla vitae, facilisis orci. Praesent non laoreet lectus. Duis fringilla nulla commodo nisl euismod, nec porta mi mollis. Quisque in ipsum eu urna imperdiet aliquet. Ut fringilla a elit at pharetra. Maecenas nec nisl in arcu ultricies semper at vitae nisi. Praesent facilisis nec nulla pretium tristique. Vestibulum quis massa sed felis rutrum facilisis. Quisque id arcu eu tellus lobortis tempus. Aliquam erat volutpat. Suspendisse blandit lacus vitae ipsum ultrices porttitor. In a faucibus ante. Etiam non nibh urna. Curabitur faucibus turpis vel sagittis cursus. Vestibulum egestas lorem sit amet neque tempor malesuada. Integer sodales vitae nibh at sollicitudin.",
  },
];

const seedStories = async () => {
  const entries = stories.map(async (story) => {
    return await prisma.story.upsert({
      where: { title: story.title },
      update: {},
      create: {
        title: story.title,
        content: story.content,
      },
    });
  });
};

seedStories()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
