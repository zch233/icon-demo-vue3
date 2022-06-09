// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import UpCircleFilledSvg from '@ant-design/icons-svg/lib/asn/UpCircleFilled';

export interface UpCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const UpCircleFilled: UpCircleFilledIconType = (props, context) => <Icon name='UpCircleFilled' {...{ ...props, ...context.attrs }} icon={UpCircleFilledSvg} />;

UpCircleFilled.displayName = 'UpCircleFilled';

export default UpCircleFilled;