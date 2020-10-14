<template>
	<router-view/>
</template>

<style>
    .front-page{
		background-color: #18033f;
	}

    .second{
		flex: 3;
		background-color: #f7f7f7;
		border-top-left-radius: 17px;
		border-bottom-left-radius: 17px;
	}

	.form-section{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 4rem;
        height: 100%;
    }

    .form-title{
        flex: 1;
    }

    .form-title p{
        margin-bottom: 0;
    }

    .form-title--heading{
        font-size: 2rem;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

	.btn--primary{
        display: inline-block;
        color: #f7f7f7;
        background-color: #06f;
        border: 0;
        padding: .8rem 2rem;
        border-radius: 17px;
        box-sizing: border-box;
        transition: all .25s ease;
        outline: none;
        appearance: none;
        box-shadow: 0 10px 20px -10px rgba(0, 102, 255, .5);
    }

    .btn--primary:hover,
    .btn--primary:focus{
        outline: none;
        box-shadow: 0px 20px 20px -10px rgba(0, 102, 255, .5);
        transform: translateY(-5px);
    }

    .goto-signup,
    .goto-login{
        flex: 1;
        text-align: right;
        color: #aaa;
        outline: none;
        margin: 0;
    }

    .goto-signup a,
    .goto-login a{
        text-decoration: none;
    }
	
    @keyframes rotateLoader {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }

    .alert-danger{
        box-shadow: 0px 20px 20px -10px rgba(245, 101, 101, .5);
    }

    .alert-success{
        box-shadow: 0px 20px 20px -10px rgba(72,187,120, .5);
    }
</style>
