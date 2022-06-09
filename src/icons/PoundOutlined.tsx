// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PoundOutlinedSvg from '@ant-design/icons-svg/lib/asn/PoundOutlined';

export interface PoundOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PoundOutlined: PoundOutlinedIconType = (props, context) => <Icon name='PoundOutlined' {...{ ...props, ...context.attrs }} icon={PoundOutlinedSvg} />;

PoundOutlined.displayName = 'PoundOutlined';

export default PoundOutlined;