type CustommerProps = {
  id: number;
  contato?: string;
  razao_social?: string;
  nome_fantasia?: string;
  rua?: string;
  nro?:string;
  bairro?: string;
  telefone?: string;
  cnpj?: string;
  email?: string; 
  cidade?: string;
  uf?: string;
}
  
export function CustommerCard(props: CustommerProps) {

  return (
    <div className="CustommerCard">
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        
        <div>
          <div style={{display: 'flex'}}>
            <div>
              <b><label style={{fontSize:'15px',paddingRight: '5px'}}>Contato</label></b>
              <div>{props.contato}</div>
            </div>
            <div style={{paddingLeft: '15px'}}>
              <b><label style={{fontSize:'15px',paddingRight: '5px'}}>Telefone</label></b>
              <div>{props.telefone}</div>
            </div>
            <div style={{paddingLeft: '15px'}}>
            <b><label style={{fontSize:'15px',paddingRight: '5px'}}>Nro.</label></b>
            <div style={{ textAlign: 'center'}}>{props.id}</div>
            </div>
          </div>
          <div style={{display: 'flex', paddingTop: '6px', justifyContent: 'flex-start'}}>
            <div>
              <b><label style={{fontSize:'15px',paddingRight: '5px'}}>Razão Social</label></b>
              <div style={{minWidth: '160px'}}>{props.razao_social}</div>
            </div>
            <div style={{paddingLeft: '10px'}}>
              <b><label style={{fontSize:'15px',paddingRight: '5px'}}>Nome Fantasia</label></b>
              <div style={{minWidth: '160px'}}>{props.nome_fantasia}</div>
            </div>
          </div>
        </div>

        <svg style={{maxWidth: '80px', alignItems: 'center'}} className="svg-icon" viewBox="0 0 20 20"
            onClick={() => {}}>
          <path d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path>
        </svg>

      </div>
      <div style={{display: 'flex'}}>



        <div style={{paddingTop: '6px'}}>
          <b><label style={{fontSize:'15px',paddingRight: '5px'}}>Endereço</label></b>
          <div style={{display: 'flex'}}>
            <div>{props.rua}</div>
            <span>{`, `}</span>
            <div style={{paddingLeft: '5px'}}>{props.nro}</div>
            <div style={{paddingLeft: '5px'}}>{props.bairro}</div>
          </div>
        </div>
      </div>
      <div style={{display: 'flex', paddingTop: '6px'}}>
        <div>
          <b><label style={{fontSize:'15px'}}>Município</label></b>
          <div style={{display: 'flex'}}>
            <div>{props.cidade}</div>
            <span style={{paddingInline: '5px'}}>{` - `}</span>
            <div>{props.uf}</div>
          </div>
        </div>
        <div style={{display: 'block',paddingLeft: '15px'}}>
          <b><label style={{fontSize:'15px'}}>Email</label></b>
          <div>{props.email}</div>
        </div>
        <div style={{paddingLeft: '12px'}}>
          <b><label style={{fontSize:'15px',paddingRight: '5px'}}>CNPJ</label></b>
          <div>{props.cnpj}</div>
        </div>
      </div>
      {/* <button>Adicionar à lista</button> */}
    </div>
  )
}
      