---
title: Apresentação
layout: section
transition: slide-up
---

<!-- Group presentation -->
<section>
  <h1 class="section-title">
    Apresentação do grupo
  </h1>

  <small class="text-gray-600">
    <i>ou talvez da dupla</i>
  </small>
</section>

---
hideInToc: true
---

# A Equipe

<section class="grid grid-cols-2 gap-24 py-20">
  <UserProfile 
    :user="{ 
      name: 'Leonardo Adamoli', 
      thumbnail: 'https://ca.slack-edge.com/T03CN9FN057-U06UHQD7NCX-gb85b19f49f0-512',
      nickname: 'Squad Clientes',
    }"
  />

  <UserProfile 
    :user="{ 
      name: 'Breno Pereira', 
      thumbnail: 'https://ca.slack-edge.com/T03CN9FN057-U0705MVV3A5-2c23b6918310-512',
      nickname: 'Squad Segurança',
    }"
  />
</section>