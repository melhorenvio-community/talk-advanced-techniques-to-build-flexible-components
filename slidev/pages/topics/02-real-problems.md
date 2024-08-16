---
title: Demonstração de problemas reais
layout: section
transition: slide-up
---

<!-- Styles Management -->
<section>
  <h1 class="section-title">
    Demonstração de problemas reais
  </h1>
</section>

---
hideInToc: true
---

# Anti-Patterns

são más práticas de contruções de aplicativos que geram componentes ineficazes;

<i>Mas como é na prática?</i>

- **Props-explosion** 💥 <br> quando o componente possui muitas props, assumindo muitas responsabilidades aumentando a sua complexidade;
<br>
<br>
- **Vulnerabilidades a ataques XSS** 🔓 <br> Props em formato de string, sendo passadas como HTML para o componente renderizar dentro de um ```v-html```;
<br>
<br>
- **Múltiplo binding de props** 🧬 <br> Passar inúmeras props e eventos para o componente sem fazer uso de shortcuts;
<br>
<br>

---
hideInToc: true
transition: slide-up
---

# Props-explosion 💥

Lembra daquele componente que quando você foi mexer e estava repleto de props e não tinha como modificar coisas especificas pois podia atrapalhar o seu uso?

### Principais causas
1. **Complexidade:** Torna o componente difícil de gerenciar e entender.
2. **Manutenção:** Aumenta a dificuldade de manutenção e testes.
3. **Reutilização:** Reduz a capacidade de reutilizar o componente em diferentes contextos.
4. **Acoplamento:** Cria um alto acoplamento entre o componente e sua implementação, dificultando alterações futuras.

### Exmplo conhecido
Aqui no Melhor Envio não é um exceção, hoje temos como exemplo o componente  `shipment-tag`;

<i>Vamos entender...</i>

---
hideInToc: true
---

# Props-explosion 💥

`Shipment-tag.vue`

```
props: {
    id,
    protocol,
    mpCode,
    shippingCompany,
    shippingServiceName,
    shippingServiceIcon,
    companyId,
    serviceId,
    contract,
    serviceCode,
    agency,
    agencyCity,
    authorizationCode,
    tracking,
    selfTracking,
    website,
    packageWeight,
    ... +40 props
```

---
hideInToc: true
---

# Vulnerabilidades a ataques XSS 🔓

Já foi necessário alguma vez utilizar o `v-html`?

<br>

### Principais causas
1. **Vulnerabilidade XSS:** Permite a execução de scripts maliciosos, expondo a aplicação a ataques XSS.
2. **Segurança:** Reduz a segurança ao permitir a inserção de conteúdo não confiável diretamente no DOM.
3. **Validação:** Dificulta a validação adequada do conteúdo inserido.

<br>
<br>

### Exmeplo conhecido?
Graças a eficiência de toda a equipe não temos problemas de `v-html` problemático na plataforma.

---
hideInToc: true
transition: slide-up
---

# Múltiplo binding de props 🧬

Ter um componente cheio de props é ruim, mas já imaginou utiliza-los na prática? Com o uso de `v-bind` juntamente ao `prop-explosion` pode prejudicar demais a sua aplicação;

### Principais causas
1. **Manutenção Difícil:** Com muitas props sendo passadas, o código pode se tornar difícil de manter.
2. **Legibilidade Reduzida:** Um grande número de props pode tornar o código menos legível e mais difícil de entender rapidamente.
3. **Desempenho:** Passar muitas props pode impactar negativamente o desempenho, especialmente se as props são atualizadas com frequência.
4. **Reusabilidade do Componente:** Componentes com muitas props tendem a ser menos reutilizáveis.

---
hideInToc: true
---

# Múltiplo binding de props 🧬

Lembra do `shipmentTag.vue`? Então, este mesmo arquivo fará parte desta etapa.

```
<shipmenTag 
    :id="tag.id"
    :protocol="tag.protocol"
    :shipping-company="tag.service.company.name"
    :company-id="String(tag.service.company.id || '')"
    :service-id="String(tag.service_id || '')"
    :contract="tag.contract"
    ...
/>
```

Imagina ter que utilizar todas as props dessa aplicação e ainda aplicar `v-bind` em cada item de um arquivo já precário. Podemos melhorar isso, não?