// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import AppstoreFilledSvg from '@ant-design/icons-svg/lib/asn/AppstoreFilled';

export interface AppstoreFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const AppstoreFilled: AppstoreFilledIconType = (props, context) => <Icon name='AppstoreFilled' {...{ ...props, ...context.attrs }} icon={AppstoreFilledSvg} />;

AppstoreFilled.displayName = 'AppstoreFilled';

export default AppstoreFilled;