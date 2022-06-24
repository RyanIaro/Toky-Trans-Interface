export function Card() {
    return(
        
    <div class="mainscreen">
    <img src="https://image.freepik.com/free-vector/purple-background-with-neon-frame_52683-34124.jpg"  class="bgimg " alt=""></img>
      <div class="card">
        <div class="rightside">
          <form action="">
            <h1>Réservation</h1>
            <p>Nom et Prénom</p>
            <input type="text" class="inputbox" name="name" required />
            <p>Numero de téléphone</p>
            <input type="text" class="inputbox" name="name" required />
            <p>Nombres de places</p>
            <input type="number" class="inputbox" name="card_number" id="card_number" required />

            <p>Offre</p>
            <select class="inputbox" name="card_type" id="card_type" required>
              <option value="Visa">Prémium</option>
              <option value="RuPay">Lite</option>
              <option value="MasterCard">Classique</option>
            </select>
            <p>Ville</p>
            <select class="inputbox" name="card_type" id="card_type" required>
              <option value="Visa">Antananarivo</option>
              <option value="RuPay">Toamasina</option>
              <option value="MasterCard">Majunga</option>
              <option value="MasterCard">Tuléar</option>
            </select>
<div class="expcvv">

            <p class="expcvv_text">Départ</p>
            <input type="date" class="inputbox" name="exp_date" id="exp_date" required />

            <p class="expcvv_text2">Référence</p>
            <input type="password" class="inputbox" name="cvv" id="cvv" required />
        </div>
            <p></p>
            <button type="submit" class="button">Réserver</button>
          </form>
        </div>
      </div>
    </div>
  

    );
}
