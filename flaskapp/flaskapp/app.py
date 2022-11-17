from flask import Flask,render_template

app = Flask(__name__, template_folder='templates', static_folder='assets')
@app.route("/")
def home():
    return render_template('index.html')

@app.route("/products")
def products():
    return render_template('products.html')

@app.route("/aboutus")
def aboutus():
    return render_template('about.html')

@app.route("/chart")
def chart():
    return render_template('chart.html')


@app.route("/cart")
def cart():
    return render_template('cart.html')
@app.route("/success")
def success():
    return render_template('success.html')