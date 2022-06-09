// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DingtalkCircleFilledSvg from '@ant-design/icons-svg/es/asn/DingtalkCircleFilled';

export interface DingtalkCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDingtalkCircleFilled: DingtalkCircleFilledIconType = (props, context) => (
    <Icon name='DingtalkCircleFilled' {...{ ...props, ...context.attrs }} icon={DingtalkCircleFilledSvg} />
);

IconDingtalkCircleFilled.displayName = 'IconDingtalkCircleFilled';

export default IconDingtalkCircleFilled;