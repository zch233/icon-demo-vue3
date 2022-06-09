// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import AndroidFilledSvg from '@ant-design/icons-svg/lib/asn/AndroidFilled';

export interface AndroidFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const AndroidFilled: AndroidFilledIconType = (props, context) => <Icon name='AndroidFilled' {...{ ...props, ...context.attrs }} icon={AndroidFilledSvg} />;

AndroidFilled.displayName = 'AndroidFilled';

export default AndroidFilled;