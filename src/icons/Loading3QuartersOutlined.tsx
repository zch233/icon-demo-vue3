// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import Loading3QuartersOutlinedSvg from '@ant-design/icons-svg/lib/asn/Loading3QuartersOutlined';

export interface Loading3QuartersOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const Loading3QuartersOutlined: Loading3QuartersOutlinedIconType = (props, context) => <Icon name='Loading3QuartersOutlined' {...{ ...props, ...context.attrs }} icon={Loading3QuartersOutlinedSvg} />;

Loading3QuartersOutlined.displayName = 'Loading3QuartersOutlined';

export default Loading3QuartersOutlined;