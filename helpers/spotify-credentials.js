module.exports = {
	"access_token": "BQB0DyItVaQ3vjF72_FsTPqXzBYnP2GZbr9TrJT503xai-xZqV8NMvB_3u5skDfe2wVy1nXi2dpxCmn0g6p5l-v9T5bwAutS1m0GGg_esyRNaeLkW3bRo3j-b0ReKDB0ghgHNfiPpAW365RmJG4wHRCLoIStcwuOww",
	"token_type": "Bearer",
	"expires_in": 3600,
	"refresh_token": "AQA7iAFjUUekdLaSQDUlTFhkpvV6JdqChiGKS1bmxsLjxlMUkzc87V6CY_8gKoMLPauukMYhJxnL2TDJxWe4aQVF16y5hALNTBwrNgG_WIdDOCp74Q8y-h9SQEmGN8ve6Fs",
	update_access_token: function(newToken) {
		this.access_token = newToken;
	},
	update_refresh_token: function(newToken) {
		this.refresh_token = newToken;
	}
};