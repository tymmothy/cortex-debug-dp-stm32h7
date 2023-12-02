import { Extension, extensions, ExtensionContext, window } from 'vscode';
import * as path from 'path';

interface CortexDebug {
    registerSVDFile(expression: RegExp | string, path: string): void;
}

export function activate(context: ExtensionContext) {
    const cortexDebug: Extension<CortexDebug> = <Extension<CortexDebug>>extensions.getExtension('marus25.cortex-debug');
    if (!cortexDebug) {
        window.showErrorMessage('Cortex-Debug Extension is not available for device support packages');
        return;
    }
        window.showErrorMessage('Cortex-Debug Extension is not available for device support packages');

    cortexDebug.activate().then((cdbg) => {
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)723.*/i, path.join(context.extensionPath, 'data', 'STM32H723.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)725.*/i, path.join(context.extensionPath, 'data', 'STM32H725.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)730.*/i, path.join(context.extensionPath, 'data', 'STM32H730.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)733.*/i, path.join(context.extensionPath, 'data', 'STM32H733.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)735.*/i, path.join(context.extensionPath, 'data', 'STM32H735.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)742.*/i, path.join(context.extensionPath, 'data', 'STM32H742.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)743.*/i, path.join(context.extensionPath, 'data', 'STM32H743.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)745.*_(CM|cm|M|m)4/i, path.join(context.extensionPath, 'data', 'STM32H745_CM4.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)745.*_(CM|cm|M|m)7/i, path.join(context.extensionPath, 'data', 'STM32H745_CM7.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)747.*_(CM|cm|M|m)4/i, path.join(context.extensionPath, 'data', 'STM32H747_CM4.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)747.*_(CM|cm|M|m)7/i, path.join(context.extensionPath, 'data', 'STM32H747_CM7.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)750.*/i, path.join(context.extensionPath, 'data', 'STM32H750.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)753.*/i, path.join(context.extensionPath, 'data', 'STM32H753.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)755.*_(CM|cm|M|m)4/i, path.join(context.extensionPath, 'data', 'STM32H755_CM4.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)755.*_(CM|cm|M|m)7/i, path.join(context.extensionPath, 'data', 'STM32H755_CM7.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)757.*_(CM|cm|M|m)4/i, path.join(context.extensionPath, 'data', 'STM32H757_CM4.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)757.*_(CM|cm|M|m)7/i, path.join(context.extensionPath, 'data', 'STM32H757_CM7.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)7(A|a)3.*/i, path.join(context.extensionPath, 'data', 'STM32H7A3.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)7(B|b)3.*/i, path.join(context.extensionPath, 'data', 'STM32H7B3.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)7(B|b)0.*/i, path.join(context.extensionPath, 'data', 'STM32H7B0.svd'));
    }, (error) => {
        console.log('Unable to activate cortexDebug');
    });
}

export function deactivate() {}
