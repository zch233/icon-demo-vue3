// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PoundCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PoundCircleFilled';

export interface PoundCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PoundCircleFilled: PoundCircleFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={PoundCircleFilledSvg} />;

PoundCircleFilled.displayName = 'PoundCircleFilled';

export default PoundCircleFilled;