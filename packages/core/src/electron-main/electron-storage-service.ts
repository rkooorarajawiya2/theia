/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
// tslint:disable:no-any

import { injectable } from 'inversify';
import ElectronStorage = require('electron-store');

export const ElectronStorageService = Symbol('ElectronStorageService');
export interface ElectronStorageService {

    get<T = any>(key: string): T | undefined
    get<T = any>(key: string, defaultValue: T): T

    set<T = any>(key: string, value?: T): typeof value

}

@injectable()
export class ElectronStorageServiceImpl implements ElectronStorageService {

    protected readonly electronStore = new ElectronStorage<any>();

    get<T = any>(key: string, defaultValue?: T): T | undefined {
        return this.electronStore.get(key, defaultValue);
    }

    set<T = any>(key: string, value?: T) {
        this.electronStore.set(key, value);
        return value;
    }

}
