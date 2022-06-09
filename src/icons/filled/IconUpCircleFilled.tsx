// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UpCircleFilledSvg from '@ant-design/icons-svg/es/asn/UpCircleFilled';

export interface UpCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconUpCircleFilled: UpCircleFilledIconType = (props, context) => (
    <Icon name='UpCircleFilled' {...{ ...props, ...context.attrs }} icon={UpCircleFilledSvg} />
);

IconUpCircleFilled.displayName = 'IconUpCircleFilled';

export default IconUpCircleFilled;