// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SkypeFilledSvg from '@ant-design/icons-svg/lib/asn/SkypeFilled';

export interface SkypeFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SkypeFilled: SkypeFilledIconType = (props, context) => <Icon name='SkypeFilled' {...{ ...props, ...context.attrs }} icon={SkypeFilledSvg} />;

SkypeFilled.displayName = 'SkypeFilled';

export default SkypeFilled;