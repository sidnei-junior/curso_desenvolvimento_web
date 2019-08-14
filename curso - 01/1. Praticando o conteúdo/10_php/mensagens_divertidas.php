<!DOCTYPE HTML>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="estilo.css">
		<title>Mensagens divertidas</title>
	</head>

	<body>
		<?php 

			/* Aula echo e print >>>>>>>>>>>>>>>>>>>>

			echo 'Teste de impressão com echo <br>';

			print 'Teste de impressão com print';

			*/

			/*Aula tipos de variáeis (menos array) >>>>>>>>>>>>>>>>>>>>

			//int
				$valor_inteiro = 1;
				echo $valor_inteiro;

				echo "<br>";
				$valor_inteiro = $valor_inteiro + 1;
				echo $valor_inteiro;

				echo "<br>";
			//float
				$valor_fracionado = 10.7;
				echo $valor_fracionado;

				echo "<br>";
			//boolean
				$estado = true;
				echo $estado;

				echo "<br>";
			//strings
				$texto = "Curso de php - $valor_inteiro";
				echo $texto;

				echo "<br>";

			*/
			/*/Aula arrays básicos >>>>>>>>>>>>>>>>>>>>
				/*
				$mensagens_divertidas['a'] = "Tô fazendo as contas aqui e esse mês não vai ter jeito, vou ter que ganhar na loteria.";
				$mensagens_divertidas[2] = "Se a vida estiver muito amarga, dá uma rebolada. Às vezes o açúcar tá no fundo.";
				$mensagens_divertidas['c'] =  "A paixão passa. O amor lava e cozinha.";
				$mensagens_divertidas[4] = "Se eu pudesse escolher de novo, eu escolheria novamente você.";
				$mensagens_divertidas[5] = "Coma menos açúcar. Você já é suficientemente doce.";
				*-/

				$mensagens_divertidas = array(
					'a' => 'Tô fazendo as contas aqui e esse mês não vai ter jeito, vou ter que ganhar na loteria.',
					2 => 'Se a vida estiver muito amarga, dá uma rebolada. Às vezes o açúcar tá no fundo.',
					'c' => 'A paixão passa. O amor lava e cozinha.',
					4 => 'Se eu pudesse escolher de novo, eu escolheria novamente você.',
					5 => 'Coma menos açúcar. Você já é suficientemente doce.'
				);

				var_dump($mensagens_divertidas);
				echo '<br><br>';
				print_r($mensagens_divertidas);
				echo '<br><br>';
				echo $mensagens_divertidas['c'];

				*/

			/*Arrays multidimensionais >>>>>>>>>>>>>>>>>>>>*/




		?>
	</body>
</html>