import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={`/posts/weather/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/weather/edit`} className='btn sm primary'>Delete</Link>
          </div>
        </div>
        <h1>This is post title!</h1>
        <div className="post-detail__thumbnail">
          <img src="https://plus.unsplash.com/premium_vector-1719017076831-ab7d0a34b31d?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolor doloremque quisquam omnis reprehenderit perferendis necessitatibus! Quod rem in architecto non, quam neque voluptas corporis error ut? Aperiam, officia tempora!
          Quod officia atque molestias, hic earum aspernatur suscipit distinctio ut ad itaque nam modi ducimus reiciendis velit est odio cum eveniet fugit, aperiam dolore alias enim obcaecati! Molestias, nostrum quam.
          Quis, pariatur minus voluptatum molestiae nemo eveniet impedit at recusandae consectetur adipisci quos debitis quaerat ad molestias praesentium magni aliquid. Libero, animi! Delectus, cupiditate temporibus quis pariatur saepe dolore molestias?
          Modi nisi veritatis repellendus doloremque cum aliquid blanditiis dignissimos obcaecati tempora ducimus facilis, cumque officia, totam possimus, iste nemo aspernatur aliquam. Unde maxime modi deserunt labore qui dolore animi beatae?
          Eveniet, quibusdam. Doloribus blanditiis quod nam error eligendi, quisquam soluta sapiente vel molestias eum inventore dolore quia officiis id. Fugiat necessitatibus, explicabo consectetur accusamus officia atque? Esse recusandae pariatur soluta.
          At soluta impedit ea fuga maxime esse delectus vel amet repellat eligendi, praesentium temporibus totam deserunt aspernatur porro corporis eum consequuntur repellendus, pariatur commodi perferendis id voluptatum? Ducimus, delectus! Aperiam!
          Error reiciendis eum quam amet inventore laudantium nesciunt quas eos, perspiciatis tenetur itaque et enim? Deserunt omnis beatae dolorem eligendi repudiandae vero placeat, architecto, ratione veniam quo maxime non consectetur!
          Voluptates minus exercitationem est voluptatem sequi quis nemo, id repudiandae itaque delectus odio quidem, libero vitae fuga excepturi ex sint? Molestiae harum aperiam numquam nostrum dignissimos iusto itaque non recusandae!
          Illum velit, magni voluptates eum omnis a officia porro inventore officiis consectetur quia consequuntur minus at facilis voluptas odit rerum distinctio et, ducimus suscipit adipisci? Ea harum aut tempora sit.
          Neque praesentium aliquid ipsum tempora iure ratione nesciunt debitis accusantium, est perferendis minus consequuntur ullam nobis enim minima laudantium harum aut, magnam quaerat mollitia magni placeat non nostrum iusto. Blanditiis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, vel, deserunt aut illum accusamus porro mollitia temporibus quam ipsum, sapiente totam esse quas? In unde, facilis ex tenetur error fugit itaque, sed dicta accusamus, cumque ipsam laudantium esse eum aut quibusdam atque illum. Explicabo officia modi molestias quam dolorum, beatae rem recusandae esse nobis animi sunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, vel, deserunt aut illum accusamus porro mollitia temporibus quam ipsum, sapiente totam esse quas? In unde, facilis ex tenetur error fugit itaque, sed dicta accusamus, cumque ipsam laudantium esse eum aut quibusdam atque illum. Explicabo officia modi molestias quam dolorum, beatae rem recusandae esse nobis animi sunt.</p>
      </div>
    </section>
  )
}

export default PostDetail