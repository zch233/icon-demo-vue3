// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PoundCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PoundCircleOutlined';

export interface PoundCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PoundCircleOutlined: PoundCircleOutlinedIconType = (props, context) => <Icon name='PoundCircleOutlined' {...{ ...props, ...context.attrs }} icon={PoundCircleOutlinedSvg} />;

PoundCircleOutlined.displayName = 'PoundCircleOutlined';

export default PoundCircleOutlined;