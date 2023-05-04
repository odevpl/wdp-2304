import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../Swipeable/Swipeable';
import StickyBar from '../StickyBar/StickyBar';
import HeaderPanelBar from '../../common/HeaderPanelBar/HeaderPanelBar';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    showStickyBar: true,
    fade: false,
    variant: this.props.variant,
    classes: [],
  };

  handlePageChange(newPage) {
    this.setState({ fade: true });
    setTimeout(() => {
      this.setState({ activePage: newPage });
      setTimeout(() => {
        this.setState({ fade: false });
      }, 0);
    }, 500);
  }

  handleCategoryChange(newCategory) {
    this.setState({ fade: true });
    setTimeout(() => {
      this.setState({ activeCategory: newCategory });
      setTimeout(() => {
        this.setState({ fade: false });
      }, 0);
    }, 500);
  }

  render() {
    const { categories, products, screenMode } = this.props;
    const { activeCategory, activePage, fade, variant, classes } = this.state;

    const productsPerPage = () => {
      if (screenMode === 'tablet') return 3;
      else if (screenMode === 'mobile') return 2;
      else if (screenMode === 'small-mobile') return 1;
      else {
        if (variant === 'productPage') return 4;
        return 8;
      }
    };

    if (variant) classes.push(styles[variant]);
    else classes.push(styles.main);

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / productsPerPage());

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={dots.length}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    const leftAction = () => {
      this.setState({ activePage: activePage + 1 });

      if (activePage >= pagesCount - 1) {
        this.setState({ activePage: activePage + 0 });
      }
    };

    const RightAction = () => {
      this.setState({ activePage: activePage - 1 });

      if (activePage <= 0) {
        this.setState({ activePage: activePage + 0 });
      }
    };
    const selectedProducts = products.filter(item => item.compare === true);

    return (
      <div className={classes.join(' ')}>
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <HeaderPanelBar title='New furniture' />
                <div className={'col ' + styles.menu}>
                  <ul>
                    {categories.map(item => (
                      <li key={item.id}>
                        <a
                          className={item.id === activeCategory && styles.active}
                          onClick={() => this.handleCategoryChange(item.id)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <Swipeable leftAction={leftAction} rightAction={RightAction}>
              <div className='row'>
                {categoryProducts
                  .slice(
                    activePage * productsPerPage(),
                    (activePage + 1) * productsPerPage()
                  )
                  .map(item => (
                    <div key={item.id} className={'col-12 col-sm-6 col-md-4 col-lg-3'}>
                      <div className={`${fade ? styles.fadeOut : styles.fadeIn}`}>
                        <ProductBox {...item} />
                      </div>
                    </div>
                  ))}
              </div>
            </Swipeable>
          </div>
        </div>
        <StickyBar products={selectedProducts} />
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  screenMode: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  activePage: PropTypes.number,
  variant: PropTypes.string,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
